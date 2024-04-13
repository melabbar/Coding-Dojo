class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3) {
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
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
        return this.name + " drank sake! Health increase by 10!"

    }
}
class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10,)
        this.wisdom = 10;


    }
    speakWisdom() {
        const message = super.drankSake();
        console.log(message);
    }
    showStats() {
        console.log(`I am Sensei ${this.name} and my stats are:\nHealth: ${this.health} \nSpeed: ${this.speed}\nStrength: ${this.strength}\nWisdom: ${this.wisdom}`)
    }

}


// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drankSake();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();




