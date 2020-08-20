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
  async createPaciente(paciente) {
    const { rut } = paciente;
    const userExist = await _pacienteRepository.getPacienteByRut(rut);
    if (userExist) {
      const error = new Error();
      error.status = 400;
      error.message = "Paciente ya existe";
      throw error;
    }

    return await _pacienteRepository.create(paciente);
  }
  
}

module.exports = PacienteService;