/*
  Base function for a player, or enemy, class (profession)
 */
var PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};


//Base classes//
var Fighter = function() {
  this.name = "Fighter";
  this.healthBonus = this.strengthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Fighter.prototype = new PlayerClass();

var Mage = function() {
  this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Mage.prototype = new PlayerClass();

var Shadow = function() {
this.name = "Shadow";
this.healthBonus = this.healthBonus + 20;
this.strengthBonus = this.strengthBonus - 15;
this.intelligenceBonus = this.intelligenceBonus + 25;
};
Shadow.prototype = new PlayerClass();

// Store human class constructors in one object to access via DOM id

var humanClasses = {

  Warrior: function() {
    this.name = "Warrior";
    this.healthBonus = this.healthBonus + 25;
    this.strengthBonus = this.strengthBonus + 30;
  },
  Valkyrie: function() {
    this.name = "Valkyrie";
    this.healthBonus = this.healthBonus + 20;
    this.strengthBonus = this.strengthBonus + 10;
  },
  Berserker: function() {
    this.name = "Berserker";
    this.healthBonus = this.healthBonus + 35;
    this.strengthBonus = this.strengthBonus + 20;
  },
  Monk: function() {
    this.name = "Monk";
    this.healthBonus = this.healthBonus + 10;
    this.strengthBonus = this.strengthBonus + 40;
  },
  Highwayman: function() {
    this.name = "Highwayman";
    this.healthBonus = this.healthBonus + 5;
    this.strengthBonus = this.strengthBonus - 10;
    this.intelligenceBonus = this.intelligenceBonus -15;
  },
  Ninja: function() {
    this.name = "Ninja";
    this.healthBonus = this.healthBonus + 15;
    this.strengthBonus = this.strengthBonus - 5;
    this.intelligenceBonus = this.intelligenceBonus + 5;
  },
  Assassin: function() {
    this.name = "Assassin";
    this.healthBonus = this.healthBonus + 10;
    this.strengthBonus = this.strengthBonus - 5;
    this.intelligenceBonus = this.intelligenceBonus + 10;
  },
  Thief: function() {
    this.name = "Thief";
    this.healthBonus = this.healthBonus -10;
    this.strengthBonus = this.strengthBonus - 10;
    this.intelligenceBonus = this.intelligenceBonus - 15;
  },
  Shaman: function() {
    this.name = "Shaman";
    this.healthBonus = this.healthBonus + 5;
    this.strengthBonus = this.strengthBonus - 10;
    this.intelligenceBonus = this.intelligenceBonus + 20;
  },
  Wizard: function() {
    this.name = "Wizard";
    this.healthBonus = this.healthBonus - 15;
    this.strengthBonus = this.strengthBonus - 25;
    this.intelligenceBonus = this.intelligenceBonus + 40;
  },
  Conjurer: function() {
    this.name = "Conjurer";
    this.strengthBonus = this.strengthBonus - 10;
    this.intelligenceBonus = this.intelligenceBonus + 10;
  },
  Sorcerer: function() {
    this.name = "Sorcerer";
    this.healthBonus = this.healthBonus - 5;
    this.strengthBonus = this.strengthBonus - 20;
    this.intelligenceBonus = this.intelligenceBonus + 30;
  }

};









humanClasses.Warrior.prototype = new Fighter();
humanClasses.Valkyrie.prototype = new Fighter();
humanClasses.Berserker.prototype = new Fighter();
humanClasses.Monk.prototype = new Fighter();
humanClasses.Highwayman.prototype = new Shadow();
humanClasses.Ninja.prototype = new Shadow();
humanClasses.Assassin.prototype = new Shadow();
humanClasses.Thief.prototype = new Shadow();
humanClasses.Warrior.prototype = new Fighter();
humanClasses.Shaman.prototype = new Mage();
humanClasses.Wizard.prototype = new Mage();
humanClasses.Conjurer.prototype = new Mage();
humanClasses.Sorcerer.prototype = new Mage();

