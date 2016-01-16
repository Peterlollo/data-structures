

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._tupleCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  this._tupleCount++;
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log("index", index);
  if(this._storage.get(index) === undefined){
    this._storage.set(index, []);
    }
    var bucket = this._storage.get(index);
    var alreadyInBucket = false;
    for(var i = 0; i < bucket.length; i++) {
      if(bucket[i][0] === k) {
        bucket[i][1] = v;
        alreadyInBucket = true;
      }
    }
    if(!alreadyInBucket){
     bucket.push([k,v]);
    }

  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(index);
      for(var i = 0; i < bucket.length; i ++) {
        if(bucket[i][0] === k) {
          return bucket[i][1];
        }
      }



};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i ++) {
    if(bucket[i][0] === k) {
      this._tupleCount--;
      bucket.splice(i, 1);
    }
  }


};



/*
 * Complexity: What is the time complexity of the above functions?
 */


