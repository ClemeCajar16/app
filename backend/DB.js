import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();



const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
  .then(() => {
    console.log("✅ Base de datos conectada exitosamente 🥳");
  })
  .catch((error) => {
    console.error("❌ Error al conectar con la base de datos 😯: ", error);
  });

export default mongoose;
