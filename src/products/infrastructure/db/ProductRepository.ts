import { ProductDao } from "./ProductDao";

export class ProductRepository implements IProductRepository {
  constructor(private productDao: ProductDao) {}

  async listProducts() {
    return this.productDao.list();
  }

  async addNewProduct(product: ProductDao) {
    this.productDao.save(product);
  }
}
