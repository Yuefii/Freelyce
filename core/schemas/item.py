from pydantic import BaseModel

class Item(BaseModel):
    description: str
    quantity: float
    rate: float
