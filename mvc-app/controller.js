class Controller {
    constructor({ model, view, logger }) {
        this.model = model;
        this.view = view;
        this.logger = logger;
      }

    run() {
        this.view.askForName((name) => {
            this.model.setName(name);
            this.logger.log(`User entered name: ${name}`);
            this.view.greetUser(this.model.getName());
            this.logger.log(`User was greeted`);
            this.view.close();
        });
    }
}

export default Controller;