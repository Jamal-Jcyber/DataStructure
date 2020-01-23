//STACK USING ARRAY
class Stack {
  constructor() {
    this._dataStore = [];
    this._length = 0;
  }

  /* Push new value at the end of the stack */
  push(value) {
    this._dataStore.push(value);
    this._length++;
  }

  /* Remove the value from the end of the stack */
  pop() {
    let lastData = this._dataStore[this._length -1];
    this._dataStore.pop();
    this._length--;
    return lastData;
  }

  /* Return the value at the very end of the stack without removing it */
  peek() {
    return this._dataStore[this._length -1];
  }

  /* Empty the stack */
  clear() {
    this._dataStore = [];
    this._length = 0;
  }

  getLength(){
    return this._length;
  }
}

let myStack = new Stack;
myStack.push("The Flash");
myStack.push("Supergirl");
myStack.push("Ash VS Evil Dead");
myStack.push("Arrow");

console.log(myStack.peek())
console.log(myStack.getLength());
console.log(myStack);
