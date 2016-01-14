var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.stackSize = 0;


  return newStack;
};

var stackMethods = {};

stackMethods.size = function(){
  return Math.max(0,this.stackSize);
};

stackMethods.push = function(value){
  this.stackSize++;
  this[this.stackSize] = value;
};

stackMethods.pop = function(){
  var result = this[this.stackSize];
  delete this[this.stackSize];
  this.stackSize--;
  return result;
};


