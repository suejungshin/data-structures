var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.n = 0;

  return obj;
};

var stackMethods = {
  size: function(){
    return this.n;
  },
  pop: function() {
    var deleted = this.storage[this.n - 1];
    delete this.storage[this.n - 1];
    this.n--;
    if (this.n < 0) this.n = 0;
    return deleted;
  },
  push: function(name){
    var init = 0;
    var keysArr = Object.keys(this.storage);
    if (keysArr.length !== 0) {
      init = Math.max(keysArr) + 1;
    }
    this.storage[init] = name;
    this.n++;
  }
};


