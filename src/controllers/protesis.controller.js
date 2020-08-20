const { ProtesisService } = require("../services");

let _protesisService = null;
class ProtesisController {
  constructor({ ProtesisService }) {
    _protesisService = ProtesisService;
  }

  async get(req, res) {
    const { protesisId } = req.params;
    const protesis = await _protesisService.get(protesisId);
    return res.send(protesis);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const protesis = await _protesisService.getAll(pageSize, pageNum);
    return res.send(protesis);
  }

  async create(req, res) {
    const { body } = req;
    const createdprotesis = await _protesisService.create(body);
    return res.status(201).send(createdprotesis);
  }

  async update(req, res) {
    const { body } = req;
    const { protesisId } = req.params;
    const updatedprotesis = await _protesisService.update(protesisId, body);
    return res.send(updatedprotesis);
  }

  async delete(req, res) {
    const { protesisId } = req.params;
    const deletedprotesis = await _protesisService.delete(protesisId);
    return res.send(deletedprotesis);
  }

  async getPacienteProtesis(req, res) {
    const { pacienteId } = req.params;
    const protesis = await _protesisService.getPacienteProtesis(pacienteId);
    return res.send(protesis);
  }
}

module.exports = ProtesisController;
