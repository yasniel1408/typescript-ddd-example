export class ProductNotFoundError extends Error {
  constructor() {
    super("El producto no existe.");
    this.name = "ProductNotFoundError";
  }
}
