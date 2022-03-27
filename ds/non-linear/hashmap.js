
const { LlNode, LinkedList } = require('../linear/linked-list');

class HashMap {
  store;
  pMod = 27; // Should be a prime number roughly 130% of the expected array size in order to reduce collisions
  constructor() {
    this.store = [];
  }

  _hashFn(key) {
    if(typeof(key) == 'string') {
      const item = [...key].reduce((sum, el) => sum + parseInt(el.charCodeAt()));
      return item % this.pMod;
    }

    return key % this.pMod;
  }

  insert(key, value) {
    const hash = this._hashFn(key);
    if(!this.store[hash]) {
      this.store[hash] = value;

      return;
    }

    if(this.store[hash]?.next) {
      const newNode = new LlNode(value);
      this.store[hash].append(newNode);

      return;
    }

    const ll = new LinkedList();
    const newNode = new LlNode(value);
    ll.append(newNode);
    this.store[hash] = ll;
  }

  retrieve(key) {
    const hash = this._hashFn(key);

    return this.store[hash];
  }

  delete(key) {
    const hash = this._hashFn(key);
    delete this.store[hash];
  }

  print() {
    console.log(this.store);
    console.log(this.store.length);
  }
}


module.exports = { HashMap };