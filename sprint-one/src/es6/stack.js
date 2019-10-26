class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage) {
    this.storage = {};
  }
  push(string) {
    let thisLength = Object.keys(this.storage).length;
    this.storage[thisLength] = string;
    return this.storage;
  }

  pop() {
    let thisPopLength = Object.keys(this.storage).length;
    let result = this.storage[thisPopLength - 1];
    console.log(this.storage)
    console.log(thisPopLength)
    delete this.storage[thisPopLength - 1];
    return result;
  }

  size() {
    return Object.keys(this.storage).length;
  }
  
}