

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.edgeContainer = [];

};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = node;
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false;
  for(var key in this) {
    if(this[key] === node) {
      result = true;
    }
  }
  return result;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var key in this) {
    if(this[key] === node) {
      delete this[key];
    } 
  }
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edgeExists = false;
  _.each(this.edgeContainer, function(edgePair){
    if((edgePair[0] === fromNode && edgePair[1] === toNode) || (edgePair[0] === toNode && edgePair[1] === fromNode)){
      edgeExists = true;
    }
  });
  return edgeExists;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edgeContainer.push([fromNode, toNode]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.edgeContainer.splice(_.indexOf([fromNode, toNode]),1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // _.each(this, function(eachNode){
  //   if(typeof this[key] !== 'function' && key !== 'edgeContainer'){
  //     cb(eachNode);
  //   }
  // });

  for(var key in this) {
    console.log("keys ", key);
    if(typeof this[key] !== 'function' && key !== 'edgeContainer') {
      console.log("Keys which are not functions: ", key);
      this[key] = cb(this[key]);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


