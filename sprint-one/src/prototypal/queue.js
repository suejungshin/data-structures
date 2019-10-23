var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.n = 0;
  obj.storage = {};

  return obj;
};

var queueMethods = {

  size: function(){
    return this.n;
  },
  dequeue: function(){
    var first = this.storage[0];
    delete this.storage[0];
    for (var keys in this.storage) {
      var temp = Number(keys);
      temp -= 1;
      this.storage[temp] = this.storage[keys];
      delete this.storage[keys];
    }
    this.n--;
    if (this.n < 0) this.n = 0;
    return first;
  },
  enqueue: function(string){
    var init = 0;
    var keysArray = Object.keys(this.storage);
    if (keysArray.length !== 0) {
      init = Math.max(keysArray) + 1;
    }
    this.storage[init] = string;
    this.n++;
  }
};


