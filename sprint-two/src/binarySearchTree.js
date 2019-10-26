var BinarySearchTree = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function (value) {
  if (value === null) {
    return 'input cannot be null'
  } else {
    var tree = new BinarySearchTree(value);
    if (this.value > value) {
      if (this.left === null) {
        return this.left = tree;
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        return this.right = tree;
      } else {
        this.right.insert(value);
      }
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  var start = this.value;
  var result;
  if (start > value) {
    if (this.left === null) {
      return false;
    } else {
      result = this.left.contains(value);
    }
  } else if (start < value) {
    if (this.right === null) {
      return false;
    } else {
      result = this.right.contains(value);
    }
  } else if (start === value) {
    return true;
  }
  return result;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
// The time complexity  Olog(n) for contains and insert, and O(n) for depthFirstLog
