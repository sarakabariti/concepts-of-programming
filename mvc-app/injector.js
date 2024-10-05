class Injector {
    constructor() {
        this.dependencies = {};
    }

    register(key, dependency) {
        this.dependencies[key] = dependency;
    }

    get(key) {
        return this.dependencies[key];
    }
}

export default Injector;