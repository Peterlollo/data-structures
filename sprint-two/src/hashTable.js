

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //Reassign tempStorage to the old limitedArray(makes it easier to reassign)
  this._tempStorage = this._storage;
  this._tupleCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  this._tupleCount++;
  if((this._tupleCount/this._limit) > 0.75) {
    //Double the limit
    this._limit = this._limit*2;
    //Overwrite the old storage by rehashing now that there is a new limit!
      this._storage.each(function(bucket, bucketIndex){
        for(var i = 0; i < bucket.length; i++) {
          //Yet to figure out this bit 
          this._tempStorage.insert();

        }
      });
    }

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

//If the tuple count divided by the limit is greater than 0.75:
      //Initiate a new limitedArray with a higher limit
        //Re hash every item from the old limitedArray into the new limitedArray!
          //Reset this._storage to that var once you're done!
          //Delete old hash table using the old limit to identify it(store old limit in a var!!?) 
//

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


