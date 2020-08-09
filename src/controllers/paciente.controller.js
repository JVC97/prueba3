let _pacienteService = null;
class PacienteController {
  constructor({ PacienteService }) {
    _pacienteService = PacienteService;
  }

  async get(req, res) {
    const { pacienteId } = req.params;
    const paciente = await _pacienteService.get(pacienteId);
    return res.send(paciente);
  }

  async getAll(req, res) {
    const { pageSize, pageNum } = req.query;
    const pacientes = await _pacienteService.getAll(pageSize, pageNum);
    return res.send(pacientes);
  }

  async update(req, res) {
    const { body } = req;
    const { pacienteId } = req.params;
    const updatedpaciente = await _pacienteService.update(pacienteId, body);
    return res.send(updatedpaciente);
  }

  async delete(req, res) {
    const { pacienteId } = req.params;
    const deletedpaciente = await _pacienteService.delete(pacienteId);
    return res.send(deletedpaciente);
  }
  async createPaciente(req, res) {
    const { body } = req;
    const createdPaciente = await _visitaService.createVisita(body);
    return res.status(201).send(createdPaciente);
  }
}

module.exports = PacienteController;