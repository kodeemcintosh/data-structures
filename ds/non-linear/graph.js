
class Graph {
  adjacencyList;

  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(vertexOne, vertexTwo) {
    if (!this.adjacencyList.has(vertexOne)) {
      this.addVertex(vertexOne);
    }
    if (!this.adjacencyList.has(vertexTwo)) {
      this.addVertex(vertexTwo);
    }

    this.adjacencyList.get(vertexOne).push(vertexTwo);
    this.adjacencyList.get(vertexTwo).push(vertexOne);
  }

  // Remove an edge between two vertices
  removeEdge(vertexOne, vertexTwo) {
    this.adjacencyList.set(vertexOne, this.adjacencyList.get(vertexOne).filter(v => v !== vertexTwo));
    this.adjacencyList.set(vertexTwo, this.adjacencyList.get(vertexTwo).filter(v => v !== vertexOne)); // Comment out this line for a directed graph
  }

  // Remove a vertex and all its connected edges
  removeVertex(vertex) {
    for (let adjVertex of this.adjacencyList.get(vertex)) {
      this.removeEdge(vertex, adjVertex);
    }

    this.adjacencyList.delete(vertex);
  }

  print() {
    for (let [vertex, edges] of this.adjacencyList) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }
}


module.exports = { Graph };