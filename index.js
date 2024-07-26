import { getInputStr, getInputInt, welcomeMessage, gameOptions } from './utils.js';
import { Player } from './modules/Player.js';
import { BattleGround } from './modules/BattleGround.js';


function generatePlayerId() {
    return Math.floor(Math.random() * 100000) + Date.now();
}


const getPlayerDetails = async() => {
    const playerName = await getInputStr('Enter your player name: ');
    const playerHealth = await getInputInt('Enter your player health: ');
    const playerAttack = await getInputInt('Enter your player attack: ');
    const playerDefense = await getInputInt('Enter your player strength: ');

    return {
        id: generatePlayerId(),
        name: playerName,
        health: playerHealth,
        attack: playerAttack,
        defense: playerDefense
    };
};


async function battle(players) {
    let winner;

    while (players.length > 1) {
        players.sort((a, b) => a.health - b.health); 
        let player1 = players[0];
        let player2 = players[players.length - 1]; 

        let battleGround = new BattleGround([player1, player2]); 

        winner = await battleGround.fight(player1.id, player2.id);

        if (winner) {
            console.log(`Player ${winner.name} won the battle!`);
        }

        players = players.filter(player => player !== player1 && player !== player2); 
        if (winner) {
            players.push(winner);
        }
    }

    return winner;
};


async function main() {
    let userInput;
    let players = [];
    const playerLimit = 2;


    welcomeMessage();


    while(userInput !== 3) {
        gameOptions();

        userInput = await getInputInt('Enter your choice (1-4): ');
        console.log('');

        switch(userInput) {
            case 1:
                if (players.length >= playerLimit) {
                    console.log('Player limit reached. Cannot add more players.');
                    break;
                } else {
                    const playerDetails = await getPlayerDetails();
                    players.push(new Player(playerDetails.id, playerDetails.name, playerDetails.health, playerDetails.attack, playerDetails.defense));
                    console.log(`Player added successfully: ${playerDetails.name}`);
                    break;
                }

            case 2:
                console.log('Displaying all players...\n');
                // console.log(players);
                players.forEach((player) => {
                    console.log(`Player ID: ${player.id}`);
                    console.log(`Player Name: ${player.name}`);
                    console.log(`Health: ${player.health}`);
                    console.log(`Attack: ${player.attack}`);
                    console.log(`Strength: ${player.defense}`);
                    console.log('');
                });
                break;

            case 3:
                console.log('Starting the battle!');

                if (players.length < playerLimit) {
                    console.log('Insufficient players to start the battle. Please add more players.');
                    break;
                } else {
                    let winner = await battle(players);

                    if (winner) {
                        console.log(`Player ${winner.name} won the game!`);
                    }

                    break;
                }

            case 4:
                console.log('Goodbye!');
                process.exit(0);
                break;

            default:
                console.log('Invalid choice. Please try again.');
        }

    
    }
}


try {
    main();
} catch (error) {
    console.error('An error occoured: ', error.message);
};
