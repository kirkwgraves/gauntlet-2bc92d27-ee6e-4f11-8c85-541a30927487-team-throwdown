var Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Berserker", "Sorcerer", "Ninja", "Monk", "Conjurer", "Wizard"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  },
  this.generateWeapon = function() {
    // Get a random index from the weapons array
    var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

    var randomWeapon = this.allowedWeapons[random];

    //Composes the corresponding weapon class into the player object
    this.weapon = new window[randomWeapon];
  }
};

Orc.prototype = new Monster();

