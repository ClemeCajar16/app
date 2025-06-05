import mongoose from "mongoose";
import { config } from "dotenv";
config();
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected 🤩"))
.catch((err) => console.error("MongoDB connection error 😯:", err));

export default mongoose;
