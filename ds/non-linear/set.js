
class SetRelations {
  setA;
  setB;
  constructor(setA, setB) {
    this.setA = new Set(setA);
    this.setB = new Set(setB);
  }

  union(setA, setB) {
    let union = setA;
    for(let el of setB) {
      union.add(el);
    }

    return union;
  }

  intersection(setA, setB) {
    let intersection = new Set();
    for(let el of setB) {
      if(setA.has(el)) {
        intersection.add(el);
      }
    }

    return intersection;
  }

  difference(setA, setB) {
    let difference = setA;
    for(let el of setB) {
      difference.delete(el);
    }

    return difference;
  }

  isSuperset(set, subset) {
    for(let el of subset) {
      if(!set.has(el)) {
        return false;
      }
    }

    return true;
  }

  print() {
    console.log('Is Set-A a superset of Set-B?: ', this.isSuperset(this.setA, this.setB) ? 'Yes!' : 'Nope.');
    console.log('Union: ', this.union(this.setA, this.setB));
    console.log('Intersection: ', this.intersection(this.setA, this.setB));
    console.log('Difference: ', this.difference(this.setA, this.setB));
  }
}


module.exports = { SetRelations };