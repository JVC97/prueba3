const BaseService = require("./base.service");
let _visitaRepository = null,
    _protesisRepository = null;

class VisitaService extends BaseService {
  constructor({ VisitaRepository, ProtesisRepository }) {
    super(VisitaRepository);
    _visitaRepository = VisitaRepository;
    _protesisRepository = ProtesisRepository;
  }

  async getVisitaProtesis(protesisId) {
    if (!protesisId) {
      const error = new Error();
      error.status = 400;
      error.message = "protesisId must be sent";
      throw error;
    }

    const protesis = await _protesisRepository.get(protesisId);

    if (!protesis) {
      const error = new Error();
      error.status = 404;
      error.message = "protesis does not exist";
      throw error;
    }

    const { comments } = protesis;
    return comments;
  }

  async createComment(descripcion, comentario, protesisId,) {
    if (!protesisId) {
      const error = new Error();
      error.status = 400;
      error.message = "protesisId must be sent";
      throw error;
    }

    const protesis = await _protesisRepository.get(protesisId);

    if (!protesis) {
      const error = new Error();
      error.status = 404;
      error.message = "protesis does not exist";
      throw error;
    }

    const createdComment = await _visitaRepository.create({
      ...descripcion,
      ...comentario,
      author: userId
    });
    protesis.comments.push(createdComment);

    return await _protesisRepository.update(protesisId, { comments: protesis.visitas});
  }
}

module.exports = VisitaService;
