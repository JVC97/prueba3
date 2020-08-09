const BaseService = require("./base.service");
let _pacienteRepository = null;

class PacienteService extends BaseService {
  constructor({ PacienteRepository }) {
    super(PacienteRepository);
    _pacienteRepository = PacienteRepository;
  }

  async getPacienteByRut(rut) {
    return await _pacienteRepository.getPacienteByRut(rut);
  }
}

module.exports = PacienteService;