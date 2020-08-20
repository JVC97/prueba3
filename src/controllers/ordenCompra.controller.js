let _ordenCompraService = null;
class OrdenCompraControllers {
  constructor({ OrdenCompraService }) {
    _ordenCompraService = OrdenCompraService;
  }

  async get(req, res) {
    const { ordenCompraId } = req.params;
    const ordenCompra = await _ordenCompraService.get(ordenCompraId);
    return res.send(ordenCompra);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const ordenCompras = await _ordenCompraService.getAll(pageSize, pageNum);
    return res.send(ordenCompras);
  }

  async update(req, res) {
    const { body } = req;
    const { ordenCompraId } = req.params;
    const updatedordenCompra = await _ordenCompraService.update(ordenCompraId, body);
    return res.send(updatedordenCompra);
  }

  async delete(req, res) {
    const { ordenCompraId } = req.params;
    const deletedordenCompra = await _ordenCompraService.delete(ordenCompraId);
    return res.send(deletedordenCompra);
  }
  async createordenCompra(req, res) {
    const { body } = req;
    const createdordenCompra = await _ordenCompraService.create(body);
    return res.status(201).send(createdordenCompra);
  }
}

module.exports = OrdenCompraControllers;