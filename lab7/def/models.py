class Product():
    def __init__(self, 
                 name: str,
                 price: float,
                 quantity: int):
        self.name = name
        self.price = price
        self.quantity = quantity
    
    def get_total_value(self):
        return self.price * self.quantity

    def __str__(self):
        return f"Product: {self.name}, Price: {self.price}"

class DiscountedProduct(Product):
    def __init__(self, 
                 name: str,
                 price: float,
                 quantity: int,
                 discount: float):
        super().__init__(name, price, quantity)
        self.discount = discount
    
    def get_total_value(self):
        return self.price * self.quantity * (1 - self.discount)

    def __str__(self):
        return f"Product: {self.name}, Price: {self.price}, Discount: {self.discount * 100}%"
