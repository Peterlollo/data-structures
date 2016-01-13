var Queue = function() {
  var someInstance = {};
  var queueSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance[queueSize] = value;
    queueSize++;
  };

  someInstance.dequeue = function() {
    var result = someInstance[0];
    delete someInstance[0];
    queueSize--;
    for(var key in someInstance) {
      someInstance[key -1] = someInstance[key];
    }
    return result;
  };

  someInstance.size = function() {
    if(queueSize<0) {
      queueSize = 0;
    }
    return queueSize;
  };


  return someInstance;
};
