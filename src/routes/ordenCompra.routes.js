const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");
const { OrdenCompraController } = require("../controllers");

module.exports = function({ OrdenCompraController }) {
  const router = Router();

  router.get("", [ParseIntMiddleware], OrdenCompraController.getAll);
  router.get("/:ordenCompraId", OrdenCompraController.get);
  router.get("/getpaciente", OrdenCompraController.get);
  router.post("/createordenCompra", OrdenCompraController.createOrdenCompra);
  router.patch("/:ordenCompraId", AuthMiddleware, OrdenCompraController.update);
  router.delete("/:ordenCompraId", AuthMiddleware, OrdenCompraController.delete);

  return router;
};