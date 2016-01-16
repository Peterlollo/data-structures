

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //Reassign tempStorage to the old limitedArray(makes it easier to reassign)
  this._tempStorage = undefined;
  this._tupleCount = 0;
};


HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

    for(var m = 0; m < bucket.length; m++) {
      if(bucket[m][0] === k) {
        bucket[m][1] = v;
        return;
      }
    }
    bucket.push([k,v]);
    this._storage.set(index, bucket);
    this._tupleCount++;

  //call the resize function here  
  if((this._tupleCount/this._limit) > 0.75){
  this.resize(this._limit*2);
  } 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(index) || [];
      for(var i = 0; i < bucket.length; i ++) {
        if(bucket[i][0] === k) {
          return bucket[i][1];
        } 
      }
      return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for(var i = 0; i < bucket.length; i ++) {
    if(bucket[i][0] === k) {
      var deletedTuple = bucket.splice(i, 1);
      this._tupleCount--;
      if ((this._tupleCount/this._limit) < 0.25){
        this.resize(Math.floor(this._limit / 2));
      }
      return deletedTuple[1];
    }
  }

  return undefined;
};

HashTable.prototype.resize = function(newLimit) {
  newLimit = Math.max(newLimit, 8);
    if(newLimit === this._limit) { return; }
    this._tupleCount = 0;
    this._limit = newLimit;
    this._tempStorage = this._storage;
    this._storage = LimitedArray(this._limit);
    for(var i = 0; i<this._tempStorage.length; i++) {
      if(!this._tempStorage[i]) {return;}
      for(var j = 0; j<this._tempStorage[i].length; j++) {
        //re-hash each tuple in old storage into the new storage array
        this._storage.insert(this._tempStorage[i][j][0], this._tempStorage[i][j][1]);
      }
    }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */


