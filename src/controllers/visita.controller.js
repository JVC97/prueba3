let _visitaService = null;
class VisitaService {
  constructor({ VisitaService }) {
    _visitaService = VisitaService;
  }

  async get(req, res) {
    const { visitaId } = req.params;
    const visita = await _visitaService.get(visitaId);
    return res.send(visita);
  }

  async update(req, res) {
    const { body } = req;
    const { visitaId } = req.params;
    const updatedVisita = await _visitaService.update(visitaId, body);
    return res.send(updatedVisita);
  }

  async delete(req, res) {
    const { visitaId } = req.params;
    const deletedVisita = await _visitaService.delete(visitaId);
    return res.send(deletedVisita);
  }

  async getProtesisVisitas(req, res) {
    const { protesisId } = req.params;
    const visitas = await _visitaService.getProtesisVisitas(protesisId);
    return res.send(visitas);
  }

  async createVisita(req, res) {
    const { body } = req;
    const { protesisId } = req.params;
    const createdVisita = await _visitaService.createVisita(
      body,
      protesisId,
    );
    return res.status(201).send(createdVisita);
  }
}

module.exports = VisitaService;
