var Stack = function() {
  var newStack = {};
  // var stackSizeValue = 0;
  newStack.stackSize = 0;
  // newStack.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
_.extend(newStack, stackMethods);

return newStack;
};

  stackMethods = {};
  stackMethods.size = function() {
    return Math.max(0,this.stackSize);
  };

  stackMethods.push = function(value) {
    // this.storage[this.stackSize] = value;
    this.stackSize++;
    var diffKey = this.stackSize;
    this[diffKey] = value;
  };

  stackMethods.pop = function() {
    // var result = this.storage[this.stackSize];
    // delete this.storage[this.stackSize];
    var diffKey = this.stackSize;
    var result = this[diffKey];
    delete this[diffKey];
    this.stackSize--;
    return result;
    // return result;
  };

