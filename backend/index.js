import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "./DB.js";
import routes from "./src/routes/empleados.routes.js";
import { config } from "dotenv";

config();
const app = express();



app.set("port", process.env.PORT || 3000);

app.use(cors({ origin: "http://localhost:4000" }));
app.use(morgan("dev"));
app.use(express.json());

// Ruta corregida con barra inicial y uso correcto del router
app.use("/api/empleados", routes);

app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});
