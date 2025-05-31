import mongoose from "mongoose";

const URI = mongoose.connect("mongodb+srv://ccajarlaguna:ub2zlkdav1BcyYkF@apirest.pywmiwy.mongodb.net/?retryWrites=true&w=majority&appName=APIRest", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Base de datos conectada exitosamente");
})
.catch((error) => {
  console.error("❌ Error al conectar con la base de datos:", error);
});

mongoose.connect(URI)