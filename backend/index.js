import express from "express";
import  cors from "cors";
import  Mongoose  from "mongoose";
import  morgan  from "morgan";

const app = express();

app.get("/", (req, res) => {

    res.send("Hello World!");
});

const POST = process.env.POST || 3000;

app.listen(3000, () => {
    console.log(`server is runing on port ${POST} 😎`);
});