const BaseService = require("./base.service");
let _protesisRepository = null;

class ProtesisService extends BaseService {
  constructor({ ProtesisRepository }) {
    super(ProtesisRepository);
    _protesisRepository = ProtesisRepository;
  }

  async getPacienteProtesis(paciente) {
    if (!paciente) {
      const error = new Error();
      error.status = 400;
      error.message = "paciente must be sent";
      throw error;
    }

    return await _protesisRepository.getPacienteProtesis(author);
  }

}

module.exports = ProtesisService;
