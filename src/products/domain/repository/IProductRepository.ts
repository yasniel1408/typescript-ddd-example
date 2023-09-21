export interface IProductRepository {
  listProducts(): Promise<any[]>;
  addNewProduct(product: any): Promise<void>;
}
