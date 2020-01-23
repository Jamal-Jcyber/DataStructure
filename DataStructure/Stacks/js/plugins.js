//STACK USING OBJECTS
class Stack {
  constructor(){
    this._dataStore = {};
    this._length = 0;
  }



  push(value){
    this._dataStore[this._length++] = value;
  }
  pop(){
    let lastData = this._dataStore[this._length -1];
    delete this._dataStore[this._length -1];
    this._length--;
    return lastData;
  }
  peek(){
    return this._dataStore[this._length -1];
  }
  clear(){
    this._dataStore = {};
    this._length = 0;
  }
  getLength(){
    return this._length;
  }
}

let muStack = new Stack;
muStack.push("the first stack");
muStack.push('the last stack');
muStack.push("the third stack");
muStack.push('the fourth stack');

muStack.push("the fifth stack");
muStack.push('the sixth stack');
muStack.push("the seventh stack");
muStack.push('the eight stack');
muStack.push('500');

// console.log(muStack.getLength());
// muStack.pop();
// muStack.pop();
// // muStack.pop();
// console.log(muStack.peek());

//
// muStack.clear();
console.log(muStack);
