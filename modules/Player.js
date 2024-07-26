export class Player {
    constructor(id, name, health, attack, strength) {
        this.id = id;
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.strength = strength;
    }

    isAlive() {
        return this.health > 0;
    }

    getDamaged(damage) {
        this.health -= damage;
    }

    getName() {
        return this.name;
    }
}