import express from "express";
import  cors from "cors";
import  morgan  from "morgan";
import mongoose from "./DB.js";
import empleadosRoutes from "./src/routes/empleados.routes.js";

const app = express();

app.use(express.json())
app.use(morgan("dev"));
app.use(cors({origin: "http://localhost:4000"}));
app.use("/empleados", empleadosRoutes);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT} 😎`);
});