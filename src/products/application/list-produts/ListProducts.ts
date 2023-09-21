import { ProductAggregate } from "../../domain/ProductAggregate";
import { ProductEntity } from "../../domain/entities/ProductEntity";
import { ProductDao } from "../../infrastructure/db/ProductDao";
import { ProductRepository } from "../../infrastructure/db/ProductRepository";

export class ListProducts {
  productAggregate: ProductAggregate = new ProductAggregate();
  productRepository: ProductRepository = new ProductRepository(
    new ProductDao()
  );

  async execute(): Promise<ProductEntity[]> {
    const productsDao = await this.productRepository.listProducts();

    const products: ProductEntity[] =
      this.mapperProductsDaoToProductEntity(productsDao);

    this.productAggregate.addProducts(products);

    return this.productAggregate.listProducts();
  }

  private mapperProductsDaoToProductEntity(productsDao: any): ProductEntity[] {
    return productsDao.map((productDao: any) => ({
      id: productDao.id,
      name: productDao.name,
      description: productDao.description,
      price: productDao.price,
      stock: productDao.stock,
      category: {
        name: productDao.category.name,
        description: productDao.category.description,
      },
    }));
  }
}

export default new ListProducts();
