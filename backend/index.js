import express from "express";
import  cors from "cors";
import  morgan  from "morgan";

const app = express();

app.use(express.json())
app.use(morgan("dev"));
app.use(cors({origin: "http://localhost:4000": true}));


// app.get("/", (req, res) => {

//     res.send("Hello World!");
// });



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT} 😎`);
});