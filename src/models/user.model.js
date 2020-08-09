const mongoose = require("mongoose");
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const UserSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: {type: String, required: false},
  email: { type: String, required: true },
  telefono: {type: String, required: false},
  direccion: {type: String, required: false},
  cargo: {type: String, required: false},
  password: { type: String, required: true }
});

UserSchema.methods.toJSON = function() {
  let user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.methods.comparePasswords = function(password) {
  return compareSync(password, this.password);
};

UserSchema.pre("save", async function(next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model("user", UserSchema);
