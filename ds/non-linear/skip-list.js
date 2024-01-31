
class SkipListNode {
  value;
  forward;

  constructor(value, level) {
    this.value = value;
    this.forward = new Array(level);
  }
}

class SkipList {
  maxLevel;
  probability;
  head;
  level;

  constructor(maxLevel, probability = 0.5) {
    this.maxLevel = maxLevel;
    this.probability = probability;
    this.head = new SkipListNode(null, maxLevel);
    this.level = 0;
  }

  _randomLevel() {
    let lvl = 1;
    while (Math.random() < this.probability && lvl < this.maxLevel) {
      lvl++;
    }
    return lvl;
  }

  insert(value) {
    const update = Array(this.maxLevel).fill(null);
    let current = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    const level = this._randomLevel();
    if (level > this.level) {
      for (let i = this.level + 1; i < level; i++) {
        update[i] = this.head;
      }

      this.level = level;
    }

    const newNode = new SkipListNode(value, level);
    for (let i = 0; i < level; i++) {
      newNode.next[i] = update[i].next[i];
      update[i].next[i] = newNode;
    }
  }

  search(value) {
    let current = this.head;
    for (let i = this.level; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
    }

    current = current.next[0];
    if (current && current.value === value) {
      return true;
    }
    return false;
  }

  delete(value) {
    const update = Array(this.maxLevel).fill(null);
    let current = this.head;

    for (let i = this.level; i >= 0; i--) {
      while (current.next[i] && current.next[i].value < value) {
        current = current.next[i];
      }
      update[i] = current;
    }

    current = current.next[0];
    if (current && current.value === value) {
      for (let i = 0; i <= this.level; i++) {
        if (update[i].next[i] !== current) break;
        update[i].next[i] = current.next[i];
      }

      while (this.level > 0 && this.head.next[this.level] == null) {
        this.level--;
      }
    }
  }

  print() {
    console.log({ skipList: this.head })
  }
}


module.exports = { SkipList };