const mongoose = require("mongoose");
const { Schema } = mongoose;

const VisitaSchema = new Schema({
  comment: { type: String, required: true },
  description: { type: String },
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
