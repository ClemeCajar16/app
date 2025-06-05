import mongoose from "mongoose";

const empleadoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    puesto: {
        type: String,
        required: true,
        trim: true
    },
    salario: {
        type: Number,
        required: true
    },
    fechaContratacion: {
        type: Date,
        default: Date.now
    }
});

const Empleado = mongoose.model("Empleado", empleadoSchema);

export default Empleado;
