var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me

  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//Time complexity for add, remove, contains will be O(1)
