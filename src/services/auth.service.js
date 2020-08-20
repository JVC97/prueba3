const { generateToken } = require("../helpers/jwt.helper");
const nodemailer = require("nodemailer");
let _userService = null;

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

class AuthService {
  constructor({ UserService }) {
    _userService = UserService;
  }
  

  async signUp(user) {
    const { email } = user;
    const userExist = await _userService.getUserByEmail(email);
    if (userExist) {
      const error = new Error();
      error.status = 400;
      error.message = "User already exist";
      throw error;
    }

    return await _userService.create(user);
  }

  async signIn(user) {
    const { email, password } = user;
    const userExist = await _userService.getUserByEmail(email);
    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = "User does not exist";
      throw error;
    }

    const validPassword = userExist.comparePasswords(password);
    if (!validPassword) {
      const error = new Error();
      error.status = 400;
      error.message = "Invalid Password";
      throw error;
    }

    const userToEncode = {
      email: userExist.email,
      id: userExist._id
    };

    const token = generateToken(userToEncode);

    return { token, user: userExist };
  }

  async recoverPassword(user){
    const { email, password } = user;
    const userExist = await _userService.getUserByEmail(email);
    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = "User does not exist";
      throw error;
    }

    return await _userService.update(userExist._id, {password});
  }

  async recuperaPassword(user){
    const { email} = user;
    const password = makeid(5);
    const userExist = await _userService.getUserByEmail(email);
    if (!userExist) {
      const error = new Error();
      error.status = 404;
      error.message = "User does not exist";
      throw error;
    }
    
    
    var testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
      host: "mail.thejvc.xyz",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "test@thejvc.xyz", // generated ethereal user
        pass: "test.prueba", // generated ethereal password
      }
    });

    // send mail with defined transport object
    var info = await transporter.sendMail({
      from: 'test@thejvc.xyz', // sender address
      to: email, // list of receivers
      subject: "Cambio de contraseña", // Subject line 
      html: password, // html body
    });
    return await _userService.update(userExist._id, {password});
    
  }
}

module.exports = AuthService;
