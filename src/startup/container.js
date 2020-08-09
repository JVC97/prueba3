const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

// services
const {
  HomeService,
  UserService,
  PacienteService,
  ProtesisService,
  VisitaService,
  AuthService
} = require("../services");

// controllers
const {
  HomeController,
  UserController,
  PacienteController,
  ProtesisController,
  VisitaController,
  AuthController
} = require("../controllers");

// routes
const {
  HomeRoutes,
  UserRoutes,
  PacienteRoutes,
  ProtesisRoutes,
  VisitaRoutes,
  AuthRoutes
} = require("../routes/index.routes");
const Routes = require("../routes");

// models
const { User, Paciente, Protesis,Visita } = require("../models");

// repositories
const {
  UserRepository,
  PacienteRepository,
  ProtesisRepository,
  VisitaRepository
} = require("../repositories");

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    PacienteService: asClass(PacienteService).singleton(),
    ProtesisService: asClass(ProtesisService).singleton(),
    VisitaService: asClass(VisitaService).singleton(),
    AuthService: asClass(AuthService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    PacienteController: asClass(PacienteController.bind(PacienteController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    ProtesisController: asClass(ProtesisController.bind(ProtesisController)).singleton(),
    VisitaController: asClass(VisitaController.bind(VisitaController)).singleton()
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    PacienteRoutes: asFunction(PacienteRoutes).singleton(),
    ProtesisRoutes: asFunction(ProtesisRoutes).singleton(),
    VisitaRoutes: asFunction(VisitaRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton()
  })
  .register({
    User: asValue(User),
    Paciente: asValue(Paciente),
    Protesis: asValue(Protesis),
    Visita: asValue(Visita)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    PacienteRepository: asClass(PacienteRepository).singleton(),
    ProtesisRepository: asClass(ProtesisRepository).singleton(),
    VisitaRepository: asClass(VisitaRepository).singleton()
  });

module.exports = container;
