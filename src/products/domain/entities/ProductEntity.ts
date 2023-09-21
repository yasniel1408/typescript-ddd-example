import { CategoryValueObject } from "../value-objects/CategoryValueObject";

export class ProductEntity {
  public id: number = Math.random();
  constructor(
    public name: string,
    public description: string,
    public price: number,
    public stock: number,
    public category: CategoryValueObject
  ) {}

  updatePrice(newPrice: number) {
    // Validar y aplicar cambios de precio
    // ...
    this.price = newPrice;
  }
}
