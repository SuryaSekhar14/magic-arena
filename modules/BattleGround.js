import { rollDice } from "../utils.js";

export class BattleGround {
    constructor(players) {
        this.players = players;
    }

    fight(playerId1, playerId2) {
        let player1 = this.players.find(player => player.id === playerId1);
        let player2 = this.players.find(player => player.id === playerId2);

        let attacker = player1.health < player2.health ? player1 : player2;
        let defender = attacker === player1 ? player2 : player1;

        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

        async function playRound(attacker, defender) {
            let attack = attacker.attack;
            let defense = defender.defense;

            let attackRoll = rollDice();
            let defenseRoll = rollDice();

            console.log(`${attacker.name} rolled: ${attackRoll}`);
            await delay(500);
            console.log(`${defender.name} rolled: ${defenseRoll}`);
            await delay(500);

            let damage = attack * attackRoll;
            let damageDefended = defense * defenseRoll;

            let damageTaken = Math.max(0, damage - damageDefended);
            defender.getDamaged(damageTaken);

            console.log(`${attacker.name}'s health: ${attacker.health}`);
            console.log(`${defender.name}'s health: ${defender.health}`);
            await delay(1000);
        }

        async function battle(attacker, defender) {
            while (attacker.isAlive() && defender.isAlive()) {
            await playRound(attacker, defender);
            [attacker, defender] = [defender, attacker];
            }

            return attacker.isAlive() ? attacker : defender;
        }

        return battle(attacker, defender);

        return attacker.isAlive() ? attacker : defender;
    }
}