var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return Math.max(0, this.queueSize);
};

queueMethods.enqueue = function (value) {
  this.queueSize++;
  this[this.queueSize] = value;
};

queueMethods.dequeue = function () {
  var result = this[1];
  delete this[1];
  for(var key in this) {
    if((typeof (parseInt(key))) === "number"){
      this[key - 1] = this[key];
    }
  }
  this.queueSize--;
  return result;
};
