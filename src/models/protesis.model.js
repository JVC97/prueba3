const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProtesisSchema = new Schema({
  anamnesis: { type: String, required: true },
  tipo: { type: String, required: true },
  pie: { type: String, required: true },
  paciente: {
    type: Schema.Types.ObjectId,
    ref: "paciente",
    required: true,
    autopopulate: true
  },
  visitas: [
    {
      type: Schema.Types.ObjectId,
      ref: "visita",
      required: true,
      autopopulate: true
    }
  ]
});

IdeaSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("protesis", ProtesisSchema);
