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

empleadosController.updateEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const empleadoEdit = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      telefono: req.body.telefono,
      direccion: req.body.direccion
    };

    const updatedEmpleado = await empleado.findByIdAndUpdate(
      id,
      { $set: empleadoEdit },
      { new: true }
    );

    if (!updatedEmpleado) {
      return res.status(404).json({ message: "Empleado no encontrado" });
    }

    res.status(200).json({ message: "Empleado actualizado correctamente" });
  } catch (error) {
    console.error("Error updating empleado:", error);
    res.status(500).json({ message: "Error updating empleado" });
  }
};

empleadosController.eliminarEmpleado = async (req, res) => {

    try {
        const { id } = req.params;
        const empleadoEliminado = await empleado.findByIdAndDelete(id);
        if (!empleadoEliminado) {
            return res.status(404).json({ message: "Empleado no se encontra" });
        }
    } catch (error) {
        console.error("Error eliminando empleado:", error);
        res.status(500).json({ message: "Error eliminando empleado" });
    }

}