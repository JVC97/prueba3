const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function({ ProtesisController }) {
  const router = Router();

  router.get("", [ParseIntMiddleware], ProtesisController.getAll);
  router.get("/:protesisId", ProtesisController.get);
  router.get("/:pacienteId/all", ProtesisController.getPacienteProtesis);
  router.post("", ProtesisController.create);
  router.patch("/:protesisId", AuthMiddleware, ProtesisController.update);
  router.delete("/:protesisId", AuthMiddleware, ProtesisController.delete);


  return router;
};
