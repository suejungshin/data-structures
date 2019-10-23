var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.n = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.n;
};
Stack.prototype.push = function(name) {
  var init = 0;
  var keysArr = Object.keys(this.storage);
  if (keysArr.length !== 0) {
    init = Math.max(keysArr) + 1;
  }
  this.storage[init] = name;
  this.n++;
};
Stack.prototype.pop = function() {
  var popped = this.storage[this.n - 1];
  delete this.storage[this.n - 1];
  this.n--;
  if (this.n < 0) {
    this.n = 0;
  }
  return popped;
};


