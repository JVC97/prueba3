const BaseRepository = require("./base.repository");
let _protesis = null;

class ProtesisRepository extends BaseRepository {
  constructor({ Protesis }) {
    super(Protesis);
    _protesis = Protesis;
  }

  async getUserProtesis(paciente) {
    return await _protesis.find({ paciente });
  }
}

module.exports = ProtesisRepository;
