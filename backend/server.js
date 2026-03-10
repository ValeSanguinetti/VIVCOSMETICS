import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.routes.js";

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/products", productsRoutes);



app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});