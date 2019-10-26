var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    if (value === null) {
      return 'input error';
    } else {
      var node = Node(value);

      if (this.head === null) {
        this.head = node;
        this.tail = this.head;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
    }
  };

  list.removeHead = function () {
    if (this.head !== null) {
      var temp = this.head;
      if (this.head.next !== null) {
        this.head = this.head.next;
      }
      delete temp;
      return temp.value;
    }
  };

  list.contains = function (target) {
    var doesContain = false;
    if (this.head === null) {
      return doesContain;
    } else {


      var temp = this.head;

      while (temp !== null) {
        if (temp.value !== target) {
          temp = temp.next;
        } else {
          doesContain = true;
          break;
        }
      }

    }

    return doesContain;
  };

  return list;

};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Remove head and add to tail will be O(1), Contains will be O(n);