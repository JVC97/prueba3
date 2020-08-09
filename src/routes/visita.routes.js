const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

module.exports = function({ VisitaController }) {
  const router = Router();

  router.get("/:visitaId/unique", VisitaController.get);
  router.get("/:protesisId", VisitaController.getProtesisVisitas);
  router.post("/:protesisId", AuthMiddleware, VisitaController.createVisita);
  router.patch("/:visitaId", AuthMiddleware, VisitaController.update);
  router.delete("/:visitaId", AuthMiddleware, VisitaController.delete);

  return router;
};
