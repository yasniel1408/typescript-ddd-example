import { IProductRepository } from "../../domain/repository/IProductRepository";
import { ProductDao } from "./ProductDao";

export class ProductRepository implements IProductRepository {
  constructor(private productDao: ProductDao) {}

  async listProducts() {
    return await this.productDao.list();
  }

  async addNewProduct(product: any) {
    this.productDao.save(product);
  }
}
