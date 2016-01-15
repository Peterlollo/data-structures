

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log("index", index);
  this._storage.set(index, v);
  //if the storage[index] is not undefined
    //retain some reference in Intermediary Storage Object between desired index and key and actual index
    //but reassign key to a new index and set it there
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
  //before you return the value located at a given index
    //check Intermediary Storage Object to see if some other value also wanted that index originally
      //if so, do some function that associates the key with the value you want and return the value;

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
   this._storage.set(index, undefined);
   // for(var key in this._storage) {
   //  if (this._storage[key] === undefined) {
   //    delete key;
   //  }
   // }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


