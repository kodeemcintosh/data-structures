
// Basic multidimensional array implementation
class MultidimensionalArray {
  matrix;

  constructor(items) {
    this.matrix = items;
  }

  print() {
    console.log({ matrix: this.matrix });
    this.array.forEach((arr, i) => console.log({ [`sub-${i}`]: arr }));
  }
}


module.exports = { MultidimensionalArray };