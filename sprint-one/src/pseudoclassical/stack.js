var Stack = function() {

  this.stackSize = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.size = function(){
  return Math.max(0, this.stackSize);
};

Stack.prototype.push = function(value){
  this.stackSize++;
  this[this.stackSize] = value;
};

Stack.prototype.pop = function(){
  var result = this[this.stackSize];
  delete this[this.stackSize];
  this.stackSize--;
  return result;
};

