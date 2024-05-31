class Graph {
  constructor() {
    this.adjacencyList = {}; // * keys are the vertices and values are arrays of adjacent vertices
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  display() {
    for (const vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${this.adjacencyList[vertex].join(", ")}`);
    }
  }
}

const graph = new Graph();
graph.addVertex("0");
graph.addVertex("1");
graph.addVertex("2");
graph.addVertex("3");
graph.addEdge("0", "1");
graph.addEdge("0", "2");
graph.addEdge("1", "3");
graph.addEdge("2", "3");
console.log(graph.display());
