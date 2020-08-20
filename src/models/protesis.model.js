const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProtesisSchema = new Schema({
  anamnesis: { type: String, required: true },
  tipo: { type: String, required: true },
  pie: { type: String, required: true },
  paciente: {
    type: Schema.Types.ObjectId,
    ref: "paciente",
    required: false,
    autopopulate: true
  },
  visitas: [
    {
      type: Schema.Types.ObjectId,
      ref: "visita",
      required: false,
      autopopulate: true
    }
  ],
  ordenCompra:{
    type: Schema.Types.ObjectId,
    ref: "ordenCompra",
    required:true
  }
},
);

ProtesisSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("protesis", ProtesisSchema);
