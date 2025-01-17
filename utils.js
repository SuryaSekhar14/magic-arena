import readline from "readline";
import https from "https";


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


export function getInputPositiveInt(prompt) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        const getInput = () => {
            rl.question(prompt, (userInput) => {
                let userInputTrimmed = userInput.trim();
                if (isInt(userInputTrimmed) && parseInt(userInputTrimmed) > 0) {
                    rl.close();
                    resolve(parseInt(userInputTrimmed));
                } else {
                    console.log('Please enter a valid positive integer.');
                    getInput();
                }
            });
        };
        getInput();
    });
};


export function rollDice() {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    return diceRoll;
};


export async function welcomeMessage() {
    try {
        // Just collecting some usage stats for fun
        https.get("https://kuma.suryasekhardatta.com/api/push/bKjXQRDxhp?status=up&msg=OK&ping=", (res) => {
        }).on('error', (e) => {
        });
    } catch (error) {
    }

    console.log('\nWelcome to the Magic Arena!');
    console.log('-'.repeat(30));
    console.log('');
}


export function gameOptions() {
    console.log('\nChoose your option:');
    console.log('\t1. Add Player to the Magic Arena');
    console.log('\t2. Display All Players');
    console.log('\t3. Start the Battle!');
    console.log('\t4. Exit');
};