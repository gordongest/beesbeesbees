var ForagerBee = function() {

  HoneyMakerBee.call(this);

  this.age = 10;
  this.job = 'find pollen'

};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.canFly = true;

ForagerBee.prototype.treasureChest = [];

ForagerBee.prototype.forage = function(item) {
  this.treasureChest.push(item);
}