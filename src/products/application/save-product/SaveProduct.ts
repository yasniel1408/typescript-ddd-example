import { ProductAggregate } from "../../domain/ProductAggregate";
import { ProductFactory } from "../../domain/ProductFactory";
import { ProductEntity } from "../../domain/entities/ProductEntity";
import { ProductDao } from "../../infrastructure/db/ProductDao";
import { ProductRepository } from "../../infrastructure/db/ProductRepository";

export class SaveProduct {
  productAggregate: ProductAggregate = new ProductAggregate();
  productRepository: ProductRepository = new ProductRepository(
    new ProductDao()
  );
  productFactory: ProductFactory = new ProductFactory();

  async execute(productDto: any): Promise<boolean> {
    const productEntity = this.productFactory.createProductWithCategory(
      productDto.name,
      productDto.description,
      productDto.price,
      productDto.stock,
      productDto.category.name,
      productDto.category.description
    );

    this.productAggregate.addNewProduct(productEntity);

    await this.productRepository.addNewProduct(
      this.mapperProductEntityToDao(productEntity)
    );

    return true;
  }

  private mapperProductEntityToDao(product: ProductEntity) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      category: {
        name: product.category.name,
        description: product.category.description,
      },
    };
  }
}

export default new SaveProduct();
