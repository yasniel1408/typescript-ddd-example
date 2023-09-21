import express from "express";
import path from "path";
import ProductsController from "./products/infrastructure/controllers/ProductsController";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.use("/api", () => {
  console.log("ruta api");
});
app.use("/api/products", ProductsController.getProducts);

app.use("/uploads", express.static(path.resolve("uploads")));

export default app;
