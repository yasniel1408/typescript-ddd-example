import express from "express";
import ProductsController from "./products/infrastructure/controllers/ProductsController";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("ruta api");
  res.json("ruta api");
});
app.get("/api/products", ProductsController.getProducts);
app.post("/api/products", ProductsController.createProduct);

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
