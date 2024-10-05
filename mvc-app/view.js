import readline from 'readline';

class View {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    
    askForName(callback) {
        this.rl.question('What is your name? ', (name) => {
            callback(name);
        });
    }

    greetUser(name) {
        console.log(`Hello, ${name}!`);
    }

    close() {
        this.rl.close();
    }
}

export default View;