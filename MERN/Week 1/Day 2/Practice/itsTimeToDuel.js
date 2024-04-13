
class Unit {
    constructor(name, cost, power, resilience) {
        this.name = name
        this.cost = cost
        this.power = power
        this.resilience = resilience
    }
}
class Effect {
    constructor(name, cost, text, stats, magnitude) {
        this.name = name
        this.cost = cost
        this.text = text
        this.stats = stats
        this.magnitude = magnitude
    }
    Hard(target) {
        if (target instanceof Unit) {
            target.resilience += this.magnitude;
            console.log(`increase ${target.name} resilience by 3 `);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    Unhandled(target) {
        if (target instanceof Unit) {
            target.resilience += this.magnitude;
            console.log(`decrease ${target.name} resilience by 2 `);
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    Pair(target) {
        if (target instanceof Unit) {
            target.power += this.magnitude;
            console.log(`increase ${target.name} power by 2 `);
        } else {
            throw new Error("Target must be a unit!");
        }
    }

}

class Card1 extends Unit {
    constructor(name) {
        super(name, 3, 3, 4)
    }
    showStats() {
        console.log(`name : ${this.name}`);
        console.log(`cost : ${this.cost}`);
        console.log(`power : ${this.power}`);
        console.log(`resilience : ${this.resilience}`);
    }
    attack(target) {
        target.resilience = target.resilience - this.power
    }
}
class Card2 extends Unit {
    constructor(name) {
        super(name, 4, 5, 4)
    }
    showStats() {
        console.log(`name : ${this.name}`);
        console.log(`cost : ${this.cost}`);
        console.log(`power : ${this.power}`);
        console.log(`resilience : ${this.resilience}`);
    }
}

const ninjaRed = new Card1("Red Belt Ninja");
const ninjaBlack = new Card2("Black Belt Ninja");
const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const effect2 = new Effect("Unhandled Promised Rejection", 1, "Decrease target's resilience by 2", "resilience", -2);
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);


ninjaRed.showStats()
ninjaBlack.showStats()
effect1.Hard(ninjaRed)
ninjaRed.showStats()
effect2.Unhandled(ninjaBlack)
ninjaBlack.showStats()
effect3.Pair(ninjaRed)
ninjaRed.showStats()
ninjaRed.attack(ninjaBlack)
ninjaBlack.showStats()
