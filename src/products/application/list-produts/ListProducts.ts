import { ProductAggregate } from "../../domain/ProductAggregate";
import { ProductFactory } from "../../domain/ProductFactory";
import { ProductEntity } from "../../domain/entities/ProductEntity";
import { ProductDao } from "../../infrastructure/db/ProductDao";
import { ProductRepository } from "../../infrastructure/db/ProductRepository";

export class ListProducts {
  productAggregate: ProductAggregate = new ProductAggregate();
  productRepository: ProductRepository = new ProductRepository(
    new ProductDao()
  );
  productFactory: ProductFactory = new ProductFactory();

  async execute(): Promise<ProductEntity[]> {
    const productsDao = await this.productRepository.listProducts();

    const products: ProductEntity[] =
      this.mapperProductsDaoToProductEntity(productsDao);

    this.productAggregate.addProducts(products);

    return this.productAggregate.listProducts();
  }

  private mapperProductsDaoToProductEntity(productsDao: any): ProductEntity[] {
    return productsDao.map((productDao: any) =>
      this.productFactory.createProductWithCategory(
        productDao.id,
        productDao.name,
        productDao.description,
        productDao.price,
        productDao.stock,
        productDao.category.name,
        productDao.category.description
      )
    );
  }
}

export default new ListProducts();
