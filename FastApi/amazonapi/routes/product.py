from fastapi import APIRouter,status,Request,HTTPException
from pydantic import BaseModel,EmailStr
from typing import Optional
from db import prisma

router=APIRouter()

class ProductSchema(BaseModel):
    name:str
    description:Optional[str]=None
    selling_price:float=0.0
    buying_price:float=0.0
    qty:int=1


@router.post("/",status_code=status.HTTP_201_CREATED)
async def create_product(payload:ProductSchema):
    new_product=await prisma.product.create(data={
        "name":payload.name,
        "description":payload.description,
        "selling_price":payload.selling_price,
        "buying_price":payload.buying_price,
        "qty":payload.qty
    })
    return {"message":"New item added","product":new_product}


# GET: Retrieve all products
@router.get("/")
async def get_products():
    products=await prisma.product.find_many()
    return products


# GET: Retrieve product by ID
@router.get("/{product_id}")
async def get_product(product_id:str):
    product=await prisma.product.find_unique(
        where={"id":product_id}
    )
    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )
    return product


# PUT: Update product
@router.put("/{product_id}")
async def update_product(product_id:str,payload:ProductSchema):
    existing=await prisma.product.find_unique(
        where={"id":product_id}
    )
    if not existing:
        raise HTTPException(status_code=404,detail="Product not found")

    updated_product=await prisma.product.update(
        where={"id":product_id},
        data={
            "name":payload.name,
            "description":payload.description,
            "selling_price":payload.selling_price,
            "buying_price":payload.buying_price,
            "qty":payload.qty
        }
    )
    return {
        "message":"Product updated successfully",
        "product":updated_product
    }


# DELETE: Delete product
@router.delete("/{product_id}")
async def delete_product(product_id:str):
    existing=await prisma.product.find_unique(
        where={"id":product_id}
    )
    if not existing:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    await prisma.product.delete(
        where={"id":product_id}
    )
    return {"message":"Product deleted successfully"}
