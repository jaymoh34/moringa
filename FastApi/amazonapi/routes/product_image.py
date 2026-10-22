import os
import shutil
from datetime import datetime, timezone
from pathlib import Path
from fastapi import APIRouter, status, HTTPException, Form, UploadFile, File
from typing import Optional
from db import prisma
from cloud import upload_to_cloud, delete_from_cloud

router = APIRouter()

UPLOAD_DIR = Path('uploads')
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


@router.post("/upload", status_code=201)
async def upload_file(product_id: str = Form(...), document: UploadFile = File(...)):
    print(f"Received file for product id {product_id}")

    # 1. Check if product exists
    product = await prisma.product.find_unique(where={"id": product_id})
    if not product:
        raise HTTPException(status_code=400, detail=f"Product with id {product_id} not found")

    # 2. Prepare local file path
    original_file = Path(document.filename)
    f_name = original_file.stem
    f_ext = original_file.suffix
    ts = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
    unique_filename = f"{f_name}_{ts}{f_ext}"
    file_path = UPLOAD_DIR / unique_filename
    
    # 3. Save file locally
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(document.file, buffer)

    try:
        # 4. Upload to Cloudinary
        image_link = upload_to_cloud(file_path=str(file_path))
        if not image_link:
            raise HTTPException(status_code=500, detail="Failed to upload image to cloud.")

        # 5. Save to Database
        new_product_image = await prisma.product_image.create(data={
            "product_id": product_id,
            "image": image_link
        })

        return {
            "message": "File received successfully",
            "product_id": product_id,
            "filename": unique_filename,
            "saved_path": str(file_path),
            "upload": image_link,
            "new_product_image": new_product_image
        }
        
    finally:
        # 6. Delete local file NO MATTER WHAT (success or error)
        if os.path.exists(file_path):
            os.remove(file_path)
            print(f"Successfully deleted local file: {file_path}")


@router.put("/{image_id}", status_code=status.HTTP_200_OK)
async def update_image(image_id: str, document: UploadFile = File(...)):
    # 1. Find existing image in DB
    existing_image = await prisma.product_image.find_unique(where={"id": image_id})
    if not existing_image:
        raise HTTPException(status_code=404, detail="Image not found")

    # 2. Prepare local file path
    original_file = Path(document.filename)
    ts = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
    unique_filename = f"{original_file.stem}_{ts}{original_file.suffix}"
    file_path = UPLOAD_DIR / unique_filename
    
    # 3. Save file locally
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(document.file, buffer)

    try:
        # 4. Upload new image to Cloudinary
        new_image_url = upload_to_cloud(file_path=str(file_path))
        if not new_image_url:
            raise HTTPException(status_code=500, detail="Failed to upload new image")

        # 5. Delete OLD image from Cloudinary
        if existing_image.image:
            old_public_id = existing_image.image.split("/")[-1].split(".")[0]
            delete_from_cloud(old_public_id)

        # 6. Update DB with new image URL
        updated_image = await prisma.product_image.update(
            where={"id": image_id},
            data={"image": new_image_url, "updated_at": datetime.now(timezone.utc)}
        )

        return {"message": "Image updated successfully", "image": updated_image}
        
    finally:
        # 7. Delete local file NO MATTER WHAT
        if os.path.exists(file_path):
            os.remove(file_path)
            print(f"Successfully deleted local file: {file_path}")