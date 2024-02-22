export class Character {
    constructor() {
        this.distance = 0;
        this.stoned = false;
    }

    get attack() {
        const baseAttack = 100;
        const distanceModifier = 1 - 0.1 * (this.distance - 1);
        const attackWithDistance = baseAttack * distanceModifier;

        if (this.stoned) {
            const stonedAttack = attackWithDistance - Math.log2(this.distance) * 5;
            return Math.round(stonedAttack);
        }

        return Math.round(attackWithDistance);
    }

    set attack(value) {
        throw new Error('Cannot set attack value directly.');
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        if (typeof value !== 'boolean') {
            throw new Error('Stoned value must be a boolean.');
        }
        this._stoned = value;
    }
}

export class Magician extends Character {
    constructor() {
        super();
    }
}

export class Daemon extends Character {
    constructor() {
        super();
    }
}
