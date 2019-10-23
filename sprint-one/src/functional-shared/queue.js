var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.n = 0;
  obj.storage = {};

  extend(obj, queueMethods);

  return obj;
};

var extend = function(obj, method) {
  for (var keys in method) {
    obj[keys] = method[keys];
  }
}

var queueMethods = {
  enqueue: function(string) {
    var init = 0
    var keysArr = Object.keys(this.storage);
    var max = Math.max(keysArr);
    if (keysArr.length !== 0) {
      init = max + 1;
    }
    this.storage[init] = string;
    this.n++;

  },
  dequeue: function() {
    var deleted = this.storage[0];
    delete this.storage[0];
    for (var keys in this.storage) {
      var copy = Number(keys);
      copy = copy - 1;
      this.storage[copy] = this.storage[keys];
      delete this.storage[keys]
    }
    this.n--;
    if (this.n < 0) this.n = 0;
    return deleted;
  },
  size: function(){
    return this.n;
  }
};


