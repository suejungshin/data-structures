var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function (value) {
  if (value === null) {
    return 'input error';
  } else {
    var tree = Tree(value);
    tree.parent = this;
    this.children.push(tree);
  }
};

treeMethods.contains = function (target) {

  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

// Advanced content

treeMethods.removeFromParent = function (value) {

  var lookUp = function lookupTargetNode(value, array) {
    var parentNode;
    for (var i = 0; i < array.length; i++) {
      if (array[i].value === value) {
        parentNode = array[i];
        return parentNode;
      } else if (array[i].children.length > 0) {
        parentNode = lookupTargetNode(value, array[i].children);
      }
    }
    return parentNode;
  }(value, this.children);

  var parent = lookUp.parent;
  lookUp.parent = null;
  var index;
  for (var i = 0; i < parent.children.length; i++) {
    if (parent.children[i].value === value) {
      index = i;
      break;
    }
  }
  parent.children.splice(index, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// the complexity for addChild is O(1) and O(n) for contains