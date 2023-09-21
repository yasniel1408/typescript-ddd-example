import { ProductEntity } from "../entities/ProductEntity";

export class CalculatePercent {
  static execute(product: ProductEntity, percent: number): number {
    return product.price * (percent / 100);
  }
}
