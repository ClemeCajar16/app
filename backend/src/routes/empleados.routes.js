import mongoose from "mongoose";

const {schema} = mongoose;

export const empleadoSchema = new schema({
    nombre: {
        type: String,
        required: true
    },
    oficio: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telefono: {
        type: String,
        required: true
    },

    direccion: {
        type: String,
        required: true
    },
    salario: {
        type: Number,
        required: true
    }
})

