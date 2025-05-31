import express from "express";
import  cors from "cors";
import  morgan  from "morgan";
import { mongoose } from "./src/DB.js";

const app = express();

app.use(express.json())
app.use(morgan("dev"));
app.use(cors({"http://localhost:4000": true}));


app.get("/", (req, res) => {

    res.send("Hello World!");
});



const POST = process.env.POST || 3000;

app.listen(3000, () => {
    console.log(`server is runing on port ${POST} 😎`);
});