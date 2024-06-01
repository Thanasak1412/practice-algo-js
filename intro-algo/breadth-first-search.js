// Breadth-First Search
// an algorithm for traversing or searching or graph data structures.
// It starts as the root (or an arbitrary node in the case of a graph)
// and explores the neighbors nodes at the present depth prior to moving on to nodes
// at the next depth level (level by level).
function bfs(graph, start) {
  const queue = [start];
  const visited = new Set(start);

  while (queue.length) {
    const currentNode = queue.shift();

    console.log(currentNode);

    graph[currentNode].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    });
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

bfs(graph, "A");
