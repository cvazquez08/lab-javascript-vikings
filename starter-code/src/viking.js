// Soldier
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;

  this.attack = function(){
    return this.strength;
  }

  this.receiveDamage = function(damage){
    this.health = health - damage;
  }
}

Viking.prototype = Object.create(Soldier.prototype);
Saxon.prototype = Object.create(Soldier.prototype);

// Viking
function Viking (name, health, strength) {
  Soldier.call(this, health, strength);
    this.name = name;

  
  this.receiveDamage = function(damage){
    this.health = health - damage;

    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`;
    }else{
      return `${this.name} has died in act of combat`;
    }

  }

  this.battleCry = function(){
    return `Odin Owns You All!`;
  }

}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)


  this.receiveDamage = function(damage){
    this.health = health - damage;

     if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`;
    }else{
      return `A Saxon has died in combat`;
    }
  }

}

// War
function War() {}
