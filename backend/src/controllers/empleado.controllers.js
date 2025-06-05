
const empleadoController = {};

empleadoController.getEmpleados = async (req, res) => {
    try {
    const empleados = await empleado.find();
    res.json(empleados);
} catch (error) {
    res.status(500).json({ message: "Error al obtener empleados", error });
}

}

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
