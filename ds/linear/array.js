
// Basic array implementation
class Array {
  array;

  constructor(items) {
    this.array = items;
  }

  push(item) {
    this.array.push(item);
  }

  pop() {
    return this.array.pop();
  }

  print() {
    console.log({ array: this.array });
  }
}


module.exports = { Array };