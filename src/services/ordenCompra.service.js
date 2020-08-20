const BaseService = require("./base.service");
let _odenCompraRepository = null;

class OrdenCompraService extends BaseService {
  constructor({ OrdenCompraRepository }) {
    super(OrdenCompraRepository);
    _odenCompraRepository = OrdenCompraRepository;
  }

  async getUserOrdenCompra(codigo) {
    return await _odenCompraRepository.getUserOrdenCompra(codigo);
  }
}

module.exports = OrdenCompraService;