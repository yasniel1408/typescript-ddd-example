export class ProductDao {
  products = [
    {
      id: "1",
      name: "Product 1",
      description: "Description 1",
      price: 100,
      stock: 10,
      category: {
        name: "Category 1",
        description: "Description 1",
      },
    },
    {
      id: "2",
      name: "Product 2",
      description: "Description 2",
      price: 200,
      stock: 20,
      category: {
        name: "Category 2",
        description: "Description 2",
      },
    },
  ];

  public id: string;
  public name: string;
  public description: string;
  public price: number;
  public stock: number;
  public category: {
    name: string;
    description: string;
  };

  async list() {
    return Promise.resolve(this.products);
  }

  async save(product) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.stock = product.stock;
    this.category = product.category;
    this.products.push(product);
  }
}
