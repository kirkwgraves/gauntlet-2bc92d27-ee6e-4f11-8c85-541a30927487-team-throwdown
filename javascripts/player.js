/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
var Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;
  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");

    return output;
  };
};

Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new window[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

Player.prototype.setClass = function(chosenClass) {  
  if (chosenClass == "Warrior") {
    this.class = new Warrior();
  } else if (chosenClass == "Valkyrie") {
    this.class = new Valkyrie();
  } else if (chosenClass == "Berserker") {
    this.class = new Berserker();
  } else if (chosenClass == "Monk") {
    this.class = new Monk();
  } else if (chosenClass == "Conjurer") {
    this.class = new Conjurer();
  } else if (chosenClass == "Wizard") {
    this.class = new Wizard();
  } else if (chosenClass == "Sorcerer") {
    this.class = new Sorcerer();
  } else if (chosenClass == "Thief") {
    this.class = new Thief();
  } else if (chosenClass == "Ninja") {
    this.class = new Ninja();
  } else if (chosenClass == "Assassin") {
    this.class = new Assassin();
  } else if (chosenClass == "surprise") {
    this.class = this.generateClass();
  }  
};
  

/*
  Define the base properties for a human in a 
  constructor function.
 */
var Human = function(name) {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;
  this.name = name;
  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk", "Highwayman", "Ninja", "Assassin", "Thief", "Shaman", "Conjurer", "Sorcerer", "Wizard"];
};
Human.prototype = new Player();


/*
  Define the base properties for a monster in a 
  constructor function.
 */
var Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

Monster.prototype = new Player();

