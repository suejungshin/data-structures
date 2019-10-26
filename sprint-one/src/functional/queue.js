var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  let storageCurrentIndex = 0;
  someInstance.enqueue = function(value) {
    storage[storageCurrentIndex] = value;
    storageCurrentIndex++;
    return storage;
  };

  someInstance.dequeue = function() {
    let storageIndexArr = Object.keys(storage);
    let minIndex = Math.min(...storageIndexArr);
    let result = storage[minIndex];
    delete storage[minIndex];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
