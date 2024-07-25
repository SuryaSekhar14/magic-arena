import readline from "readline";

function isInt(value) {
    return !isNaN(value) && parseInt(value) === parseFloat(value);
}

export function getInputStr(prompt) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

    return new Promise((resolve) => {
        const getInput = () => {
            rl.question(prompt, (answer) => {
                if (answer.trim() !== '') {
                    rl.close();
                    resolve(answer);
                } else {
                    console.log('Please enter a non-empty string.');
                    getInput(prompt);
                }
            });
        };
        getInput();
    });
};

export function getInputInt(prompt) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });

    return new Promise((resolve) => {
        const getInput = () => {
        rl.question(prompt, (userInput) => {
            let userInputTrimmed = userInput.trim();
            if (isInt(userInputTrimmed)) {
                rl.close();
                resolve(parseInt(userInputTrimmed));
            } else {
                console.log('Please enter a valid integer.');
                getInput();
            }
        });
        };
        getInput();
    });
};

export function welcomeMessage() {
    console.log('');
    console.log('Welcome to the Magic Arena!');
    console.log('-'.repeat(30));
    console.log('');
    console.log('');
};

export function gameOptions() {
    console.log('1. Add Player to the Magic Arena');
    console.log('2. Display Player Information');
    console.log('3. Start the Battle!');
    console.log('4. Exit');
};