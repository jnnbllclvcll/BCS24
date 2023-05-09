
const trainer = {
  name: "Belle",
  age: 23,
  pokemon: [],
  friends: {
    james: ["Onix", "Geodude"],
    kaori: ["Staryu", "Starmie"],
  },
  talk() {
    console.log("Pikachu! I choose you!");
  },
};

function Pokemon(name, level) {
  this.name = name;
  this.level = level;
  this.health = 10 * level;
  this.attack = 5 * level;
  this.tackle = function(target) {
    target.health -= this.attack;
    if (target.health <= 0) {
      this.faint(target);
    }
  };
  this.faint = function(target) {
    console.log(target.name + " has fainted.");
  };
}

// Instantiate Pokemon objects
const pikachu = new Pokemon("Pikachu", 5);
const charmander = new Pokemon("Charmander", 3);
const bulbasaur = new Pokemon("Bulbasaur", 4);


pikachu.tackle(charmander);
console.log(charmander.health);
