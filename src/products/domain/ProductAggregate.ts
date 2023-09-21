import { ProductNotFoundError } from "./errors/ProductNotFoundError";
import { NewProductAddedEvent } from "./events/NewProductAddedEvent";
import { ProductEntity } from "./entities/ProductEntity";

export class ProductAggregate {
  private products: Map<number, ProductEntity> = new Map();
  private cart: Map<number, ProductEntity> = new Map();

  addToCart(productId: number) {
    if (this.products.has(productId)) {
      const product = this.products.get(productId);
      this.cart.set(productId, product!);
    } else {
      throw new ProductNotFoundError();
    }
  }

  listProducts(): ProductEntity[] {
    return Array.from(this.products.values());
  }

  addNewProduct(product: ProductEntity) {
    this.products.set(product.id, product);
    // Realizar acciones adicionales si es necesario
    // Emitir el evento cuando se agrega un nuevo producto.
    const newProductAddedEvent = new NewProductAddedEvent(
      product.id,
      product.name
    );
    // Aquí, puedes utilizar un mecanismo de publicación-suscripción o un bus de eventos
    // para notificar a los suscriptores interesados sobre el evento.
    // Por simplicidad, en este ejemplo, simplemente lo mostramos en la consola.
    console.log("Evento de Nuevo Producto Agregado:", newProductAddedEvent);
  }

  addProducts(products: ProductEntity[]) {
    products.forEach((product) => {
      this.products.set(product.id, product);
    });
  }

  // Otros métodos y operaciones relacionados con productos
  // ...
}
