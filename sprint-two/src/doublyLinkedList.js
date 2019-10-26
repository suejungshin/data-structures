var DoublyLinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = list.head;
      list.head.previous = null;
    } else {
      var temp = list.tail;
      list.tail.next = newNode;
      list.tail = list.tail.next;
      list.tail.previous = temp;
    }
  };

  list.removeHead = function () {
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function (target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else if (currentNode.next === null) {
        return false;
      } else {
        currentNode = currentNode.next;
      }
    }
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Remove head and add to tail will be O(1), Contains will be O(n);