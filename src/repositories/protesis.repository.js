const BaseRepository = require("./base.repository");
let _protesis = null;

class ProtesisRepository extends BaseRepository {
  constructor({ Protesis }) {
    super(Protesis);
    _protesis = Protesis;
  }

  async getUserProtesis(rut) {
    return await _protesis.find(rut);
  }
}

module.exports = ProtesisRepository;
