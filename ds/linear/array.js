
// Basic array implementation
class Array {
  array;

  constructor(items) {
    this.array = items;
  }

  print() {
    console.log({ array: this.array });

  }
}


module.exports = { Array };