class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.n = 0;
    this.storage = {};
  }

  size() {
    return this.n;
  }

  push(name) {
    var init = 0;
    var keysArr = Object.keys(this.storage);
    if (keysArr.length !== 0) {
      init = Math.max(keysArr) + 1;
    }
    this.storage[init] = name;
    this.n++;
  }

  pop() {
    var popped = this.storage[this.n - 1];
    delete this.storage[this.n - 1];
    this.n--;
    if (this.n < 0) {
      this.n = 0;
    }
    return popped;
  }
}
