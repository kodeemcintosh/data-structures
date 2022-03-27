
const { LlNode } = require('./linked-list');

class LinkedListQueue {
  head;

  enqueue(element) {
    const node = new LlNode(element);

    if(!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while(current?.next) {
      current = current.next;
    }

    current.next = node;
  }

  dequeue() {
    if(!this.head) {
      console.log('Underflow');
      return -1;
    }

    const head = this.head.data;
    this.head = this.head.next;

    return head;
  }

  front() {
    if(!this.head) {
      console.log('Queue is empty');
      return -1;
    }

    return this.head.data;
  }

  rear() {
    if(!this.head) {
      console.log('Queue is empty');
      return -1;
    }

    let current = this.head;
    while(current?.next) {
      current = current?.next;
    }

    return current.data;
  }

  isEmpty() {
    return !this.head;
  }

  print() {
    let order = 1;
    let current = this.head;
    while(current?.data) {
      console.log(`Queue Position ${order++} - ${current.data}`);
      current = current.next;
    }
  }
}

class ArrayQueue {
  elements;
  front;
  rear;
  max;

  constructor(size) {
    this.elements = [];
    this.front = 0;
    this.rear = -1;
    this.max = size;
  }

  enqueue(element) {
    if(this.rear === this.max - 1) {
      console.log('Queue Overflowed');
      return;
    }

    this.elements[++this.rear] = element;
  }

  dequeue() {
    if(this.front === rear + 1) {
      console.log('Queue is empty');
      return -1;
    }

    const el = this.elements[++this.front];
    console.log(`${this.elements[this.front]} dequeued from queue`);
    console.log(`Front item is ${this.elements[this.front]}`);
    console.log(`Rear item is ${this.elements[this.rear]}`);

    return el;
  }

  front() {
    if(!this.elements.length) {
      console.log('Queue is empty');
      return -1;
    }

    return this.front;
  }

  rear() {
    if(!this.elements.length) {
      console.log('Queue is empty');
      return -1;
    }

    return this.rear;
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  print() {
    console.log('Front - ', this.front);
    console.log('Queue - ', this.elements);
    console.log('Rear - ', this.rear);
  }
}

class SimpleArrayQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.push(element);
  }

  dequeue() {
    if(this.isEmpty()) {
      console.log('Underflow');
      return;
    }

    return this.elements.shift();
  }

  front() {
    return this.elements[0];
  }

  back() {
    return this.elements[this.elements.length];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  print() {
    console.log('Front - ', this.elements[0]);
    console.log('Queue - ', this.elements);
    console.log('Rear - ', this.elements[this.elements.length]);
  }
}


module.exports = { Queue: LinkedListQueue };