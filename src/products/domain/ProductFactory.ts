import { CategoryValueObject } from "./value-objects/CategoryValueObject";
import { ProductEntity } from "./entities/ProductEntity";

export class ProductFactory {
  createProductWithCategory(
    productName: string,
    productDescription: string,
    productPrice: number,
    productStock: number,
    categoryName: string,
    categoryDescription: string
  ): ProductEntity {
    const category = new CategoryValueObject(categoryName, categoryDescription);

    const product = new ProductEntity(
      productName,
      productDescription,
      productPrice,
      productStock,
      category
    );

    return product;
  }
}
