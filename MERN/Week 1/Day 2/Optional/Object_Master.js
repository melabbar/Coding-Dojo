const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// Parent class

class Entity {
    constructor(id) {
        this.id = id
        this.hp = 100
    }
    attack(target) {
        target.hp -= 20
    }
}

// Child Class
// ! EXTENDS means, grab data from the name of the other class

class Pokemon extends Entity {
    constructor(id, name, types) {
        super(id)
        this.name = name
        this.types = types
    }

    attack(target) {
        super.attack(target)
        console.log(this.name + " has attacked, " + target.name + " for 20 points, its HP are now: " + target.hp);
    }
}

const allPokemon = []
for (let i = 0; i < pokémon.length; i++) {
    const p = new Pokemon(pokémon[i].id, pokémon[i].name, pokémon[i].types)
    allPokemon.push(p)
}

allPokemon[0].attack(allPokemon[1])


//ARRAY of pokemon objects where the ID is divisible evenly by 3

const divisibleBy3 = allPokemon.filter(p => p.id % 3 == 0)
console.log(divisibleBy3);

const fireTypes = allPokemon.filter(p => p.types.includes("fire"))
console.log("------------------FIRE TYPES------------------")
console.log(fireTypes)

const multiTypes = allPokemon.filter(p => p.types.length > 1)
console.log("------------------MULTIPLE TYPES------------------")
console.log(multiTypes)

const pokeName = allPokemon.map(p => p.name)
console.log("------------------ NAMES ONLY------------------")
console.log(pokeName)

const greaterThan99 = allPokemon.filter(p => p.id > 99).map(p => p.name)
console.log("------------------ NAMES ONLY WITH ID > 99------------------")
console.log(greaterThan99)

const poisonPokemon = allPokemon.filter(p => p.types.length == 1 && p.types[0] == 'poison').map(p => p.name)
console.log("------------------ POISON POKEMON------------------")
console.log(poisonPokemon)

const flyingType = allPokemon.filter(p => p.types[1] == 'flying').map(p => p.types[0])
console.log("------------------ FLYING POKEMON TYPE------------------")
console.log(flyingType)

const normalType = allPokemon.filter(p => p.types.includes('normal')).length
console.log("------------------ NORMAL POKEMON TYPE------------------")
console.log(normalType)