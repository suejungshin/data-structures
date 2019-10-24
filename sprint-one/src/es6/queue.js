var storageCurrentIndex = 0;

class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  constructor() {
    this.storage = {};
  }
  enqueue(value) {
    this.storage[storageCurrentIndex] = value;
    storageCurrentIndex++;
    return this.storage;
  };

  dequeue() {
    let storageIndexArr = Object.keys(this.storage);
    let minIndex = Math.min(...storageIndexArr);
    let result = this.storage[minIndex];
    delete this.storage[minIndex];
    return result;
  };

  size() {
    return Object.keys(this.storage).length;
  };

}
