var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var n = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    var init = 0
    var keysArr = Object.keys(storage);
    var max = Math.max(keysArr);
    if (keysArr.length !== 0) {
      init = max + 1;
    }
    storage[init] = value;
  };

  someInstance.dequeue = function() {
    var deleted = storage[0];
    delete storage[0];
    for (var keys in storage) {
      var copy = Number(keys);
      copy = copy - 1;
      storage[copy] = storage[keys];
      delete storage[keys]
    }
    n--;
    if (n < 0) n = 0;
    return deleted;
  };

  someInstance.size = function() {
    var count = 0;
    for (var keys in storage) {
      if (storage[keys] !== undefined) {
        count++;
      }
    }
    return count;
  };

  return someInstance;
};
