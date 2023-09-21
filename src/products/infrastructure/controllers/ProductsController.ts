import { Request, Response } from "express";
import ListProducts from "../../application/list-produts/ListProducts";
import SaveProduct from "../../application/save-product/SaveProduct";

class ProductsController {
  public async getProducts(req: Request, res: Response) {
    const products = await ListProducts.execute();
    res.json(products);
  }

  public async createProduct(req: Request, res: Response) {
    const productDto = req.body;
    const response = await SaveProduct.execute(productDto);
    res.json(response);
  }
}

export default new ProductsController();
