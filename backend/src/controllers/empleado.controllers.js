import { empleado } from "../../schemas/empleado.schemas.js";

const empleadosController = {};

empleadosController.getEmpleados = async (req, res) => {
  try {
    const empleados = await empleado.find();
    res.status(200).json(empleados);
  } catch (error) {
    console.error("Error fetching empleados:", error);
    res.status(500).json({ message: "Error fetching empleados" });
  }
}

empleadosController.getEmpleadoId = async (req, res) => {
    try {
        
    const empleadoId = await empleado.findById(req.params.id);
        res.status(200).json(empleadoId);
    } catch (error) {
        res.status(500).json({ message: "no se encontro el ID" });
    }
}

empleadosController.createEmpleado = async (req, res) => {
    try {
        
        const empleados = new empleado(req.body);
    await empleados.save()
    res.status(201).send("se ha creado un empleado");

    } catch (error) {
        
        console.error("Error creando empleado:", error);
    res.status(500).json({ message: "Error creando empleado" });

    }
}