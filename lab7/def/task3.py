from models import Product
from models import DiscountedProduct

ProductBefore = Product("Meth", 100.0, 2)
ProductAfter = DiscountedProduct("Meth", 100.0, 2, 0.5)

print(ProductBefore.__str__())
print(ProductAfter.__str__())

print(ProductBefore.get_total_value())
print(ProductAfter.get_total_value())