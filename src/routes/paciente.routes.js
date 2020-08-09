const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");
const { PacienteController } = require("../controllers");

module.exports = function({ PacienteController }) {
  const router = Router();

  router.get("", [ParseIntMiddleware], PacienteController.getAll);
  router.get("/:pacienteId", PacienteController.get);
  router.post("", PacienteController.createPaciente);
  router.patch("/:pacienteId", AuthMiddleware, PacienteController.update);
  router.delete("/:pacienteId", AuthMiddleware, PacienteController.delete);

  return router;
};
