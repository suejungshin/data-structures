class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.n = 0;
    this.storage = {};
  }
  size() {
    return this.n;
  }
  dequeue() {
    var first = this.storage[0];
    delete this.storage[0];
    for (var keys in this.storage) {
      var temp = Number(keys);
      temp -= 1;
      this.storage[temp] = this.storage[keys];
      delete this.storage[keys];
    }
    this.n--;
    if (this.n < 0) {
      this.n = 0;
    }
    return first;
  }

  enqueue(string) {
    var init = 0;
    var keysArray = Object.keys(this.storage);

    if (keysArray.length !== 0) {
      init = Math.max(keysArray) + 1;
    }

    this.storage[init] = name;
    this.n++;
  }
}
