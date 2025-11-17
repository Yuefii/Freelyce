from pydantic import BaseModel

class Item(BaseModel):
    description: str
    quantity: int
    rate: float
