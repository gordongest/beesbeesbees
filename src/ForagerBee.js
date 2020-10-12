var ForagerBee = function() {
  HoneyMakerBee.call(this);

  this.age = 10;
  this.job = 'find pollen'
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.canFly = true;

ForagerBee.prototype.forage = function(item) {
  this.treasureChest.push(item);
}