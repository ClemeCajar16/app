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