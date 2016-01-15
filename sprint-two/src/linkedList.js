var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null; 
  
  list.addToTail = function(value) {
    var newTail = Node(value);
    if(list.head === null) {
      list.head = newTail;
      list.tail = newTail;
    }
    list.tail.next = newTail;
    list.tail = newTail;
  };

  list.removeHead = function() {
    var result = list.head.value;
    if(list.head !== null) {
      list.head = list.head.next;
    }
    return result;
  };

  list.contains = function(target) {
    //result variable = false;
    var result  = false;
    var inner = function(node){
      if(node.value === target) {
        result = true;
      } else if(node.next) {
          inner(node.next);
       
      }
    };
    inner(list.head);
    return result;
    //declare a value check function
      //does this node.value match our target?
        //if so, update result = true;
        //else, check if node.next
          //if so send node.next into value check function
          //else, return result;
    //call value check function with head node
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
