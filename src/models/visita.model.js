const mongoose = require("mongoose");
const { Schema } = mongoose;

const VisitaSchema = new Schema({
  detalle: { type: String, required: true },
  comentario: { type: String},
  fotos: [{type:String,required:false}],
  protesis: {
    type: Schema.Types.ObjectId,
    ref: "protesis",
    required: true,
    autopopulate: true
  }
});

CommentSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("visita", VisitaSchema);
