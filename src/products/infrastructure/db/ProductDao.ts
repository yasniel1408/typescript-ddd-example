export class ProductDao {
  private products: any[] = [
    // {
    //   id: 1,
    //   name: "Product 1",
    //   description: "Description 1",
    //   price: 100,
    //   stock: 10,
    //   category: {
    //     name: "Category 1",
    //     description: "Description 1",
    //   },
    // },
    // {
    //   id: 2,
    //   name: "Product 2",
    //   description: "Description 2",
    //   price: 200,
    //   stock: 20,
    //   category: {
    //     name: "Category 2",
    //     description: "Description 2",
    //   },
    // },
  ];

  async list(): Promise<any[]> {
    return this.products;
  }

  async save(product: any) {
    this.products.push(product);
    console.log(this.products);
  }
}

export default new ProductDao();
