const BaseRepository = require("./base.repository");
let _visita = null;

class VisitaRepository extends BaseRepository {
  constructor({ Visita }) {
    super(Visita);
    _visita = Visita;
  }
}

module.exports = VisitaRepository;
