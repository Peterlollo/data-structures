var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,

  // but try not not reference your old code in writing the new style.
  this.queueSize = 0;

};


Queue.prototype.size = function() {
  return Math.max(0, this.queueSize);
};

Queue.prototype.enqueue = function (value) {
  this.queueSize++;
  this[this.queueSize] = value;
};

Queue.prototype.dequeue = function () {
  var result = this[1];
  delete this[1];
  for(var key in this) {
    if(typeof parseInt(key) === 'number') {
      this[key - 1] = this[key];
    }
  }
  this.queueSize--;
  return result;
};
