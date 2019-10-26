var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function (string) {
  let thisLength = Object.keys(this.storage).length;
  this.storage[thisLength] = string;
  return this.storage;
}

Stack.prototype.pop = function () {
  let thisPopLength = Object.keys(this.storage).length;
  let result = this.storage[thisPopLength - 1];
  console.log(this.storage)
  console.log(thisPopLength)
  delete this.storage[thisPopLength - 1];
  return result;
}

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
}

