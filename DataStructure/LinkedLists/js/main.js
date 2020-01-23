class Node {
  constructor(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }


  addToHead(value){
    let newHeadNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newHeadNode;
    else this.tail = newHeadNode;
    this.head = newHeadNode;
  }
  addToTail(value){
    let newTailNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newTailNode;
    else this.head = newTailNode;
    this.tail = newTailNode;
  }
  removeHead(){
    if (!this.head) return null;
    let removedHead = this.head;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    this.tail = null;
    return removedHead;
  }
  removedTail(){
    if (!this.tail) return null;
    let removedTail = this.tail;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    this.head = null;
    return removedTail;
  }
  search(value){
    let  currentNode = this.head;

    while(currentNode){
      if (currentNode.value === value) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
  indexOf(value){
    let indexes = [];
    let index = 0;
    let currentNode = this.head;

    while (currentNode){
      if (currentNode.value === value){
        indexes.push(index)
      }
      currentNode = currentNode.next;
      index++;
    }
    return indexes;
  }
}


let LL = new LinkedList;

LL.addToHead(10);
LL.addToHead(20);
LL.addToHead(30);
LL.addToHead(20);
LL.addToHead(50);

LL.addToTail(100);
LL.addToTail(200);
LL.addToTail(300);
LL.addToTail(20);
LL.addToTail(500);



console.log(LL.indexOf(20));



function f() {
  let variable = document.get
}
