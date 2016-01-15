var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;
  var search = function(subTree) {
    if(subTree.value === target) {
      result = true;
    } else if (subTree.children) {
      _.each(subTree.children, function(eachChild){
        search(eachChild);
      });
    }
  };
  search(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
