class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name
        this.health = 90
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log(this.name, " is a NINJA!")
    }
    showStats() {
        console.log(this.name, "has a health of: ", this.health)
        console.log(this.name, "has a speed of: ", this.speed)
        console.log(this.name, "has a strength of: ", this.strength)
    }
    drankSake() {
        this.health += 10
        console.log(this.name, "drank sake! Health increase by 10!")
        console.log("His health is now", this.health)
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drankSake();


