const BaseRepository = require("./base.repository");
let _paciente = null;

class PacienteRepository extends BaseRepository {
  constructor({ Paciente }) {
    super(Paciente);
    _paciente = Paciente;
  }

  async getPacienteByRut(rut) {
    return await _paciente.findOne({rut});
  }
}

module.exports = PacienteRepository;