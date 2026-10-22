from datetime import datetime, timezone
from fastapi import APIRouter, status, HTTPException
from pydantic import BaseModel
from typing import Optional
from db import prisma

router = APIRouter()

# Schema for incoming data validation
class ProductSchema(BaseModel):
    name: str
    description: Optional[str] = None
    selling_price: float = 0.0
    buying_price: float = 0.0
    qty: int = 1


# 1. CREATE PRODUCT
@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_product(payload: ProductSchema):
    # We pass all fields including qty to the database
    new_product = await prisma.product.create(data={
        "name": payload.name,
        "description": payload.description,
        "selling_price": payload.selling_price,
        "buying_price": payload.buying_price,
        "qty": payload.qty
    })
    return {"message": "New item added", "product": new_product}


# 2. GET ALL PRODUCTS
@router.get("/")
async def get_products():
    # Fetch every record from the product table
    products = await prisma.product.find_many()
    return products


# 3. GET ONE PRODUCT BY ID
@router.get("/{product_id}")
async def get_product(product_id: str):
    # Find the specific product using its UUID
    product = await prisma.product.find_unique(
        where={"id": product_id}
    )
    # If it doesn't exist, return a 404 error
    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )
    return product


# 4. UPDATE PRODUCT
@router.put("/{product_id}")
async def update_product(product_id: str, payload: ProductSchema):
    # First, check if the product actually exists
    existing = await prisma.product.find_unique(
        where={"id": product_id}
    )
    if not existing:
        raise HTTPException(status_code=404, detail="Product not found")

    # Perform the update
    updated_product = await prisma.product.update(
        where={"id": product_id},
        data={
            "name": payload.name,
            "description": payload.description,
            "selling_price": payload.selling_price,
            "buying_price": payload.buying_price,
            "qty": payload.qty,
            # Manually update the timestamp so we know when it changed
            "updated_at": datetime.now(timezone.utc) 
        }
    )
    return {
        "message": "Product updated successfully",
        "product": updated_product
    }


# 5. DELETE PRODUCT
@router.delete("/{product_id}")
async def delete_product(product_id: str):
    # Check if the product exists before attempting to delete
    existing = await prisma.product.find_unique(
        where={"id": product_id}
    )
    if not existing:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    # Delete the record
    await prisma.product.delete(
        where={"id": product_id}
    )
    return {"message": "Product deleted successfully"}
