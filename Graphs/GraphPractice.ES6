'use strict';


/*  
  Directed Graph using the adjacency list representation
  Node in a graph
*/

class Node {
  constructor(name) {
    /* each node has a name */
    this._name = name;      
    /* each node has an edgeList which contains the array of vertices to which the node has edges. */  
    this._edgeList = [ ];
    this._visited = false; 
    this._distance = -1;
    this._path = null;
}

class Graph {
  constructor(vertexCount, vertices) {
    this._vertexCount = vertexCount;
    this._vertices = vertices;
  }

  addEdge(src, dest) {
    if (!this._vertices.contains(src) && !this._vertices.contains(dest) {
      console.log('Src or Destination does not exist in the graph');
      return;
    }

    if (!src._edgeList.contains(dest)) {
      src._edgeList.push(dest);
    }
  }

  /* Recursive version of Depth First Search. 
     Remember what problem you solve using recursion could also be solved iteratively.
  */

  recursiveDfs(src) {
    if (src === null) {
      return;
    } 
    // visit the src node
    console.log(src._name);
    src._visited = true;

    const self = this;
    src._edgeList.forEach(function(neighborNode, index, array) {
      if (!neighborNode._visited) {
        self.recursiveDfs(neighborNode);
      }
    });
  }


  // Very good. Solved it!!
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

  bfs(src) {
    if (src === null) {
      return;
    }
    // using javascript array to simulate a queue
    let queue = [ ];
    // visit the src
    queue.push(src);

    while(queue.length) {
      let node = queue.shift();     //similar to dequeue operation
      console.log(node._name);
      node._visited = true;
      node._edgeList.forEach(function(neighbor, index, array) {
        if (!neighbor._visited) {
          queue.push(neighbor);   //similar to enqueue operation 
        }
      });
    }
  }

  // We are assuming that each node has a distance field which stores the distance of the node from source node.

  UnWeightedShortestPath(src) {
    let distance = [ ];
    let queue = [ ];
    if (src === null) {
      return;
    }

    queue.push(src);

    src._distance = 0;

    while(queue.length) {
      let node queue.shift();
      node._edgeList.forEach(function(neighbor, index, array) {
        if (neighbor._distance === -1) {
          neighbor._distance = node._distance + 1;
          neighbor._path = node._name;
          queue.push(neighbor);
        }
      });
    }
  }
}



const a = new Node("0");
const b = new Node("1");
const c = new Node("2");
const d = new Node("3");

const g = new Graph(4, [a ,b, c, d]);


g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);