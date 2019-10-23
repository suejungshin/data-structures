var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.n = 0;
  extend(obj, stackMethods);

  return obj
};

var extend = function(obj, method) {
  for (var keys in method) {
    obj[keys] = method[keys];
  }
}

var stackMethods = {
  push: function(name) {
    this.storage[this.n] = name;
    this.n++;
  },
  pop: function(){
    var popped = this.storage[this.n - 1];
    delete this.storage[this.n - 1];
    this.n--;
    if (this.n < 0) this.n = 0;
    return popped;
  },
  size: function(){
    return this.n;
  }
};


