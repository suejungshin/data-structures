var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};


  // Implement the methods below
  someInstance.push = function(value) {
    let storageLength = Object.keys(storage).length;
    storage[storageLength] = value;
    return storage;
  };

  someInstance.pop = function() {
    let storageLength = Object.keys(storage).length;
    let result = storage[storageLength-1];
    delete storage[storageLength-1];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
