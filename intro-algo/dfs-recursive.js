// Depth-First Search (DFS)
// used for traversing or searching tree of graph data structures.
// Selecting soe arbitrary node
// explores as far as possible along each branch before backtracking
function dfsRecursive(graph, node, visited = new Set()) {
  if (!visited.has(node)) {
    console.log(`Process the node: ${node}`);
    visited.add(node);

    for (const neighbor of graph[node]) {
      dfsRecursive(graph, neighbor, visited);
    }
  }
}

const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

dfsRecursive(graph, "A");
