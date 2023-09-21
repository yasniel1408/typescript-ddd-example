import { Request, Response } from "express";
import ListProducts from "../../application/list-produts/ListProducts";

class ProductsController {
  public async getProducts(req: Request, res: Response) {
    const products = await ListProducts.execute();
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
