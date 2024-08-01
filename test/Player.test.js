import { Player } from '../modules/Player.js';


describe('Player', () => {
    let player;

    beforeEach(() => {
        player = new Player(1, 'John', 100, 20, 50);
    });

    it('should return true when player is alive', () => {
        expect(player.isAlive()).toBe(true);
    });

    it('should return false when player is dead', () => {
        player.getDamaged(200);
        expect(player.isAlive()).toBe(false);
    });

    it('should reduce player health when getting damaged', () => {
        player.getDamaged(30);
        expect(player.health).toBe(70);
    });
});