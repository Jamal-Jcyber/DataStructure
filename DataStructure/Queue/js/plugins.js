//Queue Using Objects
class Queue {
  constructor(){
    this._dataStore = {};
    this._length = 0;
    this._headIndex = 0;
  }


  onQueue(value){
    this._dataStore[this._length+ this._headIndex] = value;
    this._length++;
  }

  deQueue(){
    delete this._dataStore[this._headIndex];
    this._headIndex++;
    this._length--;
  }
  peek(){
    return this._dataStore[this._headIndex];
  }
  totalItemsInQueue(){
    return this._length;
  }
  clear(){
    this._dataStore = {};
    this._length = 0;
    this._headIndex = 0;
  }


}

let myQueue = new Queue;

myQueue.onQueue(12);
myQueue.onQueue(13);
myQueue.onQueue(14);
myQueue.onQueue(15);
myQueue.onQueue(16);

myQueue.deQueue();
myQueue.onQueue(15);
myQueue.peek();
console.log(myQueue.totalItemsInQueue());
myQueue.clear();
console.log(myQueue);
