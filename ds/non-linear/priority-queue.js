
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  push(element, priority) {
    let queueElement = { element, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (queueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(queueElement);
    }
  }

  pop() {
    if (this.isEmpty()) {
      return 'Underflow';
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return 'No elements in Queue';
    }
    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) {
      return 'No elements in Queue';
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += `${this.items[i].element} (${this.items[i].priority}) `;
    }
    return str.trim();
  }
}


module.exports = { PriorityQueue };