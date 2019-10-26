

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i ++) {
    this._storage[i] = [];
  }

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = new Array(2);
  tuple[0] = k;
  tuple[1] = v;
  if (this.retrieve(k) !== undefined) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        this._storage[index][i][1] = v;
      }
    }
  } else {
    this._storage[index].push(tuple);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var correctBox = this._storage[index];
  for (var i = 0; i < correctBox.length; i ++) {
    if (correctBox[i][0] === k) {
      return correctBox[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentArray = this._storage[index];
  for (var i = 0; i < currentArray.length; i ++) {
    if (currentArray[i][0] === k) {
      currentArray.splice(i, 1);
    }
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */

// Worst case of this implementation will have O(n) time complexity for retrieve, remove, insert
