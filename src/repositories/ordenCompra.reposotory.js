const BaseRepository = require("./base.repository");
let _ordenCompra = null;

class OrdenCompraRepository extends BaseRepository {
  constructor({ OrdenCompra }) {
    super(OrdenCompra);
    _ordenCompra = OrdenCompra;
  }

  async getUserOrdenCompra(codigo) {
    return await _ordenCompra.find(codigo);
  }
}

module.exports = OrdenCompraRepository;