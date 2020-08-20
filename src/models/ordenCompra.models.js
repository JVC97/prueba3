const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdeonCompraSchema = new Schema({
  codigo: { type: String, required: true },
  tipo: { type: String, required: true },
  foto: { type: String, required: true },
  protesis: [{
      type: Schema.Types.ObjectId,
      ref:"protesis",
      required:false,
      autopopulate: true
  }]
},
);


OrdeonCompraSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("ordenCompra", OrdeonCompraSchema);