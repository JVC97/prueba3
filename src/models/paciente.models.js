const mongoose = require("mongoose");
const { Schema } = mongoose;

const PacienteSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: {type: String, required: true},
  rut: { type: String, required: true },
  direccion: { type: String, required: true  },
  telefono: { type: String, required: true },
  sexo: {type: String, required: true},
  fechaNacimiento: {type: String, required: true},
  protesis: [
    {
      type: Schema.Types.ObjectId,
      ref: "protesis",
      required: false,
    }
  ]
},
);

module.exports = mongoose.model("paciente", PacienteSchema);
