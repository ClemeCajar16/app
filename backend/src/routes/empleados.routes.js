import express from "express";
import empleadosController from "../controllers/empleado.controllers.js";

const router = express.Router();

router.get("/", empleadosController.getEmpleados);
router.get("/:id", empleadosController.getEmpleadoId);
router.post("/", empleadosController.createEmpleado);
router.put("/:id", empleadosController.updateEmpleado);
router.delete("/:id", empleadosController.deleteEmpleado);

export default router;
