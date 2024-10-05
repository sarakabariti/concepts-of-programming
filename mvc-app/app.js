import config from "./config.js";
import Model from "./model.js";
import View from "./view.js";
import Logger from "./logger.js"; 
import Controller from "./controller.js";
import Injector from "./injector.js";
import { createContainer, asClass } from "awilix";

/*

// Dependency injection (manual)
const model = new Model();
const view = new View();
const logger = new Logger();
const controller = new Controller(model, view, logger);

controller.run();

*/

/*
// mini DI injector
const injector = new Injector();
injector.register('model', new Model());
injector.register('view', new View());
injector.register('logger', new Logger());
injector.register('controller', new Controller(injector.get('model'), injector.get('view'), injector.get('logger')));

const appController = injector.get('controller');
appController.run();
*/


// Using DI framework
const container = createContainer();

container.register({
  model: asClass(Model).singleton(),
  view: asClass(View).singleton(),
  logger: asClass(Logger).singleton(),
  controller: asClass(Controller).singleton()
});

const appController = container.resolve("controller");
appController.run();
