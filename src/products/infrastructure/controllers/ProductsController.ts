import { Request, Response } from "express";
import { ListProducts } from "../../application/list-produts/ListProducts";
import { ProductAggregate } from "../../domain/ProductAggregate";
import { ProductRepository } from "../db/ProductRepository";
import { ProductFactory } from "../../domain/ProductFactory";
import { ProductDao } from "../db/ProductDao";

class ProductsController {
  private listProducts: ListProducts;

  constructor() {
    this.listProducts = new ListProducts(
      new ProductAggregate(),
      new ProductRepository(new ProductDao()),
      new ProductFactory()
    );
  }

  public async getProducts(req: Request, res: Response) {
    const products = await this.listProducts.execute();
    res.json(products);
  }

  // public async createProduct(req: Request, res: Response) {
  //   const productDto: ProductDto = req.body;
  //   const product: Product = this.productMapper.dtoToDomain(productDto);
  //   const productCreated: Product = await this.productUseCase.createProduct(
  //     product
  //   );
  //   const productCreatedDto: ProductDto =
  //     this.productMapper.domainToDto(productCreated);
  //   res.json(productCreatedDto);
  // }
}

export default new ProductsController();
