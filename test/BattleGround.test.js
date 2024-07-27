import { BattleGround } from "../modules/BattleGround.js";
import { Player } from "../modules/Player.js";

describe("BattleGround", () => {
    let battleGround, player1, player2;

    beforeEach(() => {
        player1 = new Player('1', 'Player 1', 1, 2, 3);
        player2 = new Player('2', 'Player 2', 1, 2, 3);
    });

    it("should have a fight method", () => {
        battleGround = new BattleGround([player1, player2]);
        expect(battleGround.fight).toBeDefined();
    });

    it("should have a fight method that returns the winning player", async () => {
        battleGround = new BattleGround([player1, player2]);
        let winner = await battleGround.fight(player1.id, player2.id);
        expect(winner).toBeDefined();
    });

    //should not start with just 1 player
    it("should not start with just 1 player", () => {
        battleGround = new BattleGround([player1]);
        expect(() => battleGround.fight(player1.id)).toThrow();
    });
});