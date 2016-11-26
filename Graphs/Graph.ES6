/* Directed Graph - Adjacency List Representation 

  http://www.geeksforgeeks.org/depth-first-traversal-for-a-graph/
  http://www.geeksforgeeks.org/iterative-depth-first-traversal/
  http://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/
  http://www.programmerinterview.com/index.php/data-structures/dfs-vs-bfs/
  http://stackoverflow.com/questions/3332947/when-is-it-practical-to-use-dfs-vs-bfs
  http://freefeast.info/difference-between/difference-between-bfs-and-dfs-bfs-vs-dfs/

  Breadth first search can be used to find the shortest path between some
  starting node and remaining nodes of a graph


*/
  
'use strict';

// check if the node exists in the graph. 
Array.prototype.contains = function(name) {
  let i = this.length;
  while (i--) {
    if(this[i].name == name) {
      return true;
    }
  }
  return false;
}

// declare global variable Queue

let Queue = require('data-structures').Queue;

class Node {
  constructor(name) {
    this.name = name;
    this.edgeList = [ ];
    this.visited = false;
    this.recStack = false;
  }
}

// Initialize the Graph. You need vertex count
class Graph {
  constructor(vertexCount, vertices) {
    this._vertexCount = vertexCount;
    this._vertices = vertices;
  }

  addEdge(src, dest) {
    if (!this._vertices.contains(src) || !this._vertices.contains(dest)) {
      console.log("Source or destination does not exist");
      return;
    }

    // add an edge from source to destination.
    if (!src.edgeList.contains(dest)){
      src.edgeList.push(dest);
    }
  }

  printNodesInGraph() {
    for (let i = 0; i < this._vertices.length; i++) {
      console.log(this._vertices[i]);
    }
  }

  /* 
     Given a source vertex, do a depth first search on the Graph
     Time Complexity = O(V + E) in adjacency list representation
     Time Complexity = O(V square) in adjacency matrix implementation
  */

  depthFirstSearch(src) {
    if(src === null) {
      return;
    } 
    else {
      console.log(src.name);
      src.visited = true;
      let self = this;
      src.edgeList.forEach(function(node, index, array) {
        if (!node.visited) {
          self.depthFirstSearch(node);
        }
      }); 
    }
  }

   // Time Complexity: O(V + E)
  iterativeDfs(src) {
    // use javascript array to simulate a stack
    let stack = [ ];
    if (src === null) { 
      return;
    }

    // visit the src node
    console.log(src._name);
    src._visited = true;
    stack.push(src);

    // do while stack is not empty
    while(stack.length) {
      let node = stack.pop();
      node._edgeList.forEach(function(neighbor, index, array) {
        if (!neighbor._visited) {
          neighbor._visited = true;
          stack.push(neighbor);
        }
      });
    }
  }

  /* This does not have to be recursive
     Remember to check the visited flag.
     Done
  */

  breadthFirstSearch(src) {
    let queue = new Queue();
    if (src === null) {
      return;
    }
    else {
      queue.enqueue(src);
      while(queue.size !== 0) {
        let node = queue.dequeue();
        console.log(node.name);
        node.visited = true;
        node.edgeList.forEach(function(neighbourNode, index, array) {
          if (!neighbourNode.visited) {
            queue.enqueue(neighbourNode);
          }
        });
      }
    }
  }

  // Returns true if the Graph contains a cycle else it returns false
  isCyclic() {
    //let visited = new Array(this._vertexCount);
    let recStack = new Array(this._vertexCount);

    //visited.fill(false);
    recStack.fill(false);

    for (let i = 0; i < this._vertexCount; i++) {
      if (isCyclicUtil(this._vertices[i], visited, recStack)) {
        return true;
      }
    }
    return false;
  }

  isCyclicUtil(vertex, visited, recStack) {
    if (vertex.visited === false) {
      // Mark the current node as visited and part of the recursion stack

      vertex.visited = true;
      vertex.recStack = true;
    }
  }

  dijkstraShortestPath(src) {

  }
}


const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
const e = new Node("E");

const graph = new Graph(4, [a, b, c, d, e]);

graph.addEdge(a, b);
graph.addEdge(b, c);
graph.addEdge(c, d);
graph.addEdge(c, a);
graph.addEdge(a, d);
graph.addEdge(a, e);

let queue = new Queue();
graph.breadthFirstSearch(a);