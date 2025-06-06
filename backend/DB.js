import mongoose from "mongoose";
import { config } from "dotenv";
config();
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected 🤩"))
.catch((err) => console.error("MongoDB connection error 😯:", err));

export default mongoose;
