var Stack = function() {
  var someInstance = {};
  var n = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[n] = value;
    n++;
  };

  someInstance.pop = function() {
    var popped = someInstance[n - 1];
    delete someInstance[n];
    n--;
    if (n < 0) n = 0;
    return popped;
  };

  someInstance.size = function() {
    return n;
  };

  return someInstance;
};
