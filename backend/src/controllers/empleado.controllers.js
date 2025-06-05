import empleadoSchema from "../schemas/empleado.schemas.js";
const empleadoController = {};

// Obtener todos los empleados
empleadoController.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener empleados", error });
    }
};

// Obtener un empleado por ID
empleadoController.getEmpleadoById = async (req, res) => {
    try {
        const empleado = await Empleado.findById(req.params.id);
        if (!empleado) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }
        res.json(empleado);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener empleado", error });
    }
};

// Crear nuevo empleado
empleadoController.createEmpleado = async (req, res) => {
    try {
        const nuevoEmpleado = new Empleado(req.body);
        const empleadoGuardado = await nuevoEmpleado.save();
        res.status(201).json(empleadoGuardado);
    } catch (error) {
        res.status(400).json({ message: "Error al crear empleado", error });
    }
};

// Actualizar empleado
empleadoController.updateEmpleado = async (req, res) => {
    try {
        const empleadoActualizado = await Empleado.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!empleadoActualizado) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }
        res.json(empleadoActualizado);
    } catch (error) {
        res.status(400).json({ message: "Error al actualizar empleado", error });
    }
};

// Eliminar empleado
empleadoController.deleteEmpleado = async (req, res) => {
    try {
        const empleadoEliminado = await Empleado.findByIdAndDelete(req.params.id);
        if (!empleadoEliminado) {
            return res.status(404).json({ message: "Empleado no encontrado" });
        }
        res.json({ message: "Empleado eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar empleado", error });
    }
};

export default empleadoController;