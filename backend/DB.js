import mongoose from "mongoose";

// mongoose.connect("mongodb+srv://ccajarlaguna:ub2zlkdav1BcyYkF@apirest.pywmiwy.mongodb.net/?retryWrites=true&w=majority&appName=APIRest", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("✅ Base de datos conectada exitosamente");
// })
// .catch((error) => {
//   console.error("❌ Error al conectar con la base de datos:", error);
// });

// export default mongoose;

const URI = "mongodb+srv://ccajarlaguna:ub2zlkdav1BcyYkF@apirest.pywmiwy.mongodb.net/?retryWrites=true&w=majority&appName=APIRest";

mongoose.connect(URI) 
  .then(() => {
    console.log("✅ Base de datos conectada exitosamente 🥳");})
    .catch((error) => {
    console.error("❌ Error al conectar con la base de datos 😯: ", error);
  });
  
  export default mongoose;