//Queue Using Array
class Queue {

  constructor() {
    this._dataStore = [];
    this._length = 0;
  }

  /* Push a new item in queue */
  enQueue(value) {
    this._dataStore.push(value);
    this._length++;
  }

  /* Remove the very front item from the queue */
  deQueue() {
    this._dataStore.shift();
    this._length--;
  }

  /* Peek the very front item with in the queue */
  peek() {
    return this._dataStore[0];
  }

  /* Check the total items in the queue */
  TotalItemsInQueue(){
    return this._length;
  }

  /* Clear the queue */
  clear() {
    this._dataStore = [];
    this._length = 0;
  }
}



let myQueue = new Queue;
myQueue.enQueue("0");
myQueue.enQueue("1");
myQueue.enQueue("2");
myQueue.enQueue("3");
myQueue.enQueue("4");
myQueue.enQueue("5");
myQueue.enQueue("6");
myQueue.deQueue();
myQueue.deQueue();
myQueue.deQueue();
myQueue.deQueue();
console.log(myQueue.peek());
console.log(myQueue.TotalItemsInQueue());
console.log(myQueue);
myQueue.clear();
