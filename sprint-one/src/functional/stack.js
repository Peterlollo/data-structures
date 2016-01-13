var Stack = function() {
  var someInstance = {};
  var stackSize = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
  stackSize++;
  someInstance[stackSize] = value;
  };

  someInstance.pop = function() {
  var result = someInstance[stackSize];
  delete someInstance[stackSize];
  stackSize--;
  return result;
  };

  someInstance.size = function() {
  return Math.max(0,stackSize);
  };

  return someInstance;
};
