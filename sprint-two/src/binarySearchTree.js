var BinarySearchTree = function(value) {
  var subTree = {};
  subTree.value = value;
  subTree.left = undefined;
  subTree.right = undefined;
  _.extend(subTree, binaryMethods);
  return subTree;
};
var binaryMethods = {};

binaryMethods.insert = function(value) {
  // var subTree = BinarySearchTree(value);
  //var recurse = function (startTree, value) 
  var recurse = function(startTree){

      if(startTree.value > value){ 
        if(startTree.left === undefined){
          startTree.left = BinarySearchTree(value);
        } else {
          recurse(startTree.left);
        }
      } else { 
        if(startTree.right === undefined){
          startTree.right = BinarySearchTree(value);
        } else {
          recurse(startTree.right);
        }
    }
  };

  recurse(this);

};

binaryMethods.contains = function(value) {

  if (this.value === value) {
    return true;
  } else if (this.value > value && this.left !== undefined) {
    return this.left.contains(value);
  } else if (this.value < value && this.right !== undefined) {
    return this.right.contains(value);
  } else {
    return false;
  }

};

binaryMethods.depthFirstLog = function (callback) {

  var recurse = function(startTree){
    callback(startTree.value);
    if(startTree.left !== undefined) {
      recurse(startTree.left);
    } if (startTree.right !== undefined) {
      recurse(startTree.right);
    }
  };
  recurse(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
