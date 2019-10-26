var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var resultObj = {};
  resultObj.storage = {};
  _.extend(resultObj, queueMethods);

  return resultObj;
};

var queueMethods = {};
var storageCurrentIndex = 0;

queueMethods.enqueue = function(value) {
  this.storage[storageCurrentIndex] = value;
  storageCurrentIndex++;
  return this.storage;
};

queueMethods.dequeue = function() {
  let storageIndexArr = Object.keys(this.storage);
  let minIndex = Math.min(...storageIndexArr);
  let result = this.storage[minIndex];
  delete this.storage[minIndex];
  return result;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};