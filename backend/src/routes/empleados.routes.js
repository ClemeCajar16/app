import { Router } from "express";
import empleadoController from "../controllers/empleado.controllers.js";

const router = Router();

router.get("/", empleadoController.getEmpleados);
router.get("/:id", empleadoController.getEmpleadoById);
router.post("/", empleadoController.createEmpleado);
router.put("/:id", empleadoController.updateEmpleado);
router.delete("/:id", empleadoController.deleteEmpleado);

export default router;
