# Magic Arena

Part of the Swiggy aSDE Backend Coding Round 1. This is a simple Node.js project. 

Made using JavaScript, Node.js, and Jest, without using any third-party libraries. Local history is mantained using git. 

Sufficient tests are written to cover the codebase, and all methods and functions. Documentation for everything can be found below.

The game uses a simple, easy-to-read, mantainable design and codebase, and is scalable for multiple players as well. Just incerase the max number of players in the `index.js` file. 

## Problem Statement
Design a Magical Arena. Every Player is defined by a "health" attribute, "strength" attribute, and an "attack" attribute - all positive integers. The player dies if his health attribute touches 0.

<details>
    <summary>Complete Problem Statement</summary>

    ## Detailed Problem Statement

    Design a Magical Arena. Every Player is defined by a "health" attribute, "strength" attribute, and an "attack" attribute - all positive integers. The player dies if his health attribute touches 0. 

    1. Any two players can fight a match in the arena. Players attack in turns. The attacking player rolls the attacking dice, and the defending player rolls the defending dice. The "attack" value multiplied by the outcome of the attacking dice roll is the damage created by the attacker. The defender's "strength" value, multiplied by the outcome of the defending dice, is the damage defended by the defender. Whatever damage created by the attacker which is in excess of the damage defended by the defender will reduce the "health" of the defender. The game ends when any player's health reaches 0.

    2. Player with lower health attacks first at the start of a match. 

    3. Assume two players: 
        - Player A: 50 health, 5 strength, 10 attack
        - Player B: 100 health, 10 strength, and 5 attack

        Attacking die and Defending die are both 6-sided die with values ranging from 1 to 6.

        Player A attacks and rolls die. Die roll: 5. Player B defends and rolls die. Die roll: 2.

        Attack damage is 5 * 10 = 50; Defending strength = 10 * 2 = 20; Player B health reduced by 30 to 70.

        Player B attacks and rolls die. Die roll: 4. Player A defends and rolls die. Die Roll: 3.

        Attack damage is 4 * 5 = 20; Defending strength = 5 * 3 = 15; Player A health reduced by 5 to 45.

        And so on.
</details>

## Usage

To install the dependencies, run the following command:
```bash
npm install
```

To run the project, run the following command:
```bash
node index.js
```

To run the tests, run the following command:
```bash
npm test
```

## Project Description

The project has the following files:
1. `index.js`: The main file that runs the game.
2. `Player.js`: The class that defines the Player.
3. `BattleGround.js`: The class that defines the BattleGround.
4. `utils.js`: The utility functions used in the project.

The project uses the `jest` testing framework for testing. The tests are written in the `tests` directory.

## Data Modelling and Design

The project has two classes: `Player` and `BattleGround`.

### Player

The `Player` object has the following attributes:
1. `health`: The health of the player.
2. `strength`: The strength of the player.
3. `attack`: The attack of the player.
4. `name`: The name of the player.
5. `id`: The id of the player.

The `Player` object has the following methods:
1. `isAlive()`: Returns true if the player is alive, false otherwise.
2. `getDamage()`: Deals damage to the player, reducing the health.

### BattleGround

The `BattleGround` object has the following attributes:
1. `players`: An array of players.

The `BattleGround` object has the following methods:
1. `fight()`: The main method that runs the game. It simulates the fight between two players. The player with lower health attacks first. The game ends when any player's health reaches 0. The method returns the winner of the game.

### index.js

The `index.js` file runs the game. It creates two players and a battleground and runs the fight.

### utils.js

The `utils.js` file has the following utility functions:
1. `getInputStr()`: Takes an input string and returns it.
2. `getInputPositiveInt()`: Takes an input string and returns a positive integer.
3. `rollDice()`: Returns a random number between 1 and 6.
4. `welcomeMessage()`: Displays the welcome message.
5. `gameOptions()`: Displays the game options.


## Testing

The project uses the `jest` testing framework for testing. The tests are written in the `tests` directory.

The tests cover the following scenarios:
1. Test if the Player class is working correctly.
    - Test if the player is alive.
    - Test if the player is dead.
    - Test if the player takes damage.

2. Test if the BattleGround class is working correctly.
    - Test if the fight method is present.
    - Test if the fight method is working correctly.
    - Test if the fight is not working when there are less than two players.

3. Test if the Utility functions are working correctly.
    - Test if the `getInputStr` function is working correctly.
    - Test if the `getInputPositiveInt` function is working correctly.
    - Test if the `rollDice` function is returning a number between 1 and 6.
    


