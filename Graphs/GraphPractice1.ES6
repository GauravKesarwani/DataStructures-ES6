'use strict';

class Node {
	constructor(name) {
		this._name = name;
		this._edgeList = [ ];
		this._visited = false;
    this._color = 'WHITE';
    this._distance = Number.MAX_VALUE;
	}
}

class Graph {
	constructor(vertices, vertexCount) {
		this._vertices = vertices;
		this._vertexCount = vertexCount;
	}

	addEdge(src, dest) {
		if (!this._vertices.includes(src) || !this._vertices.includes(dest)) {
			console.log('Source or Destination does not exist in the tree');
			return;
		}

		if (!src._edgeList.includes(dest)) {
			src._edgeList.push(dest);
		}
	}

	routeBetweenNodes(src, dest) {
		let queue = [ ] // JavaScript array to simulate a queue
		queue.push(src);

		while(queue.length) {
			let node = queue.pop();
			node._edgeList.forEach(function(neighbor) {
				if (!neighbor._visited) {
					if (neighbor._name === dest._name) {
						console.log('Path exists from source to destination');
						return;
					}
					neighbor._visited = true;
					queue.push(neighbor);
				}
			});
		}
	}

  // Time Complexity O(V + E)
	iterativeDfs(src) {
    let stack = [ ];
    stack.push(src);

    while (stack.length) {
      let node = stack.pop();
      console.log(node._name);
      node._visited = true;
      node._edgeList.forEach(function(neighbor, index, array) {
        if (!neighbor._visited) {
          neighbor._visited = true;
          stack.push(neighbor);
        }
      });
    }
	}

  dfsUtil(node) {
    node._color = 'GRAY';

    node._edgeList.forEach(function(neighbor, index, array) {
      if (neighbor._color === 'GRAY') {
        return true;
      }

      if (neighbor._COLOR === 'WHITE' && this.dfsUtil(neighbor)) {
        return true;
      }
    });

    // Mark this vertex as processed
    node._color = 'BLACK';

    return false;
  }

  isCyclic() {
    // Do a DFS traversal for all vertices

    this._vertices.forEach(function(vertex, index, array) {
      if (vertex._color === 'WHITE') {
         if (this.dfsUtil(vertex)) {
          return true;
        }
      }
    });

    return false;
  }


}


const nodeA = new Node('A'),
  nodeB = new Node('B'),
  nodeC = new Node('C'),
  nodeD = new Node('D'),
  nodeE = new Node('E');

let graph = new Graph([ nodeA, nodeB, nodeC, nodeD, nodeE ], 5);
graph.addEdge(nodeA, nodeB);
graph.addEdge(nodeB, nodeC);
graph.addEdge(nodeA, nodeD);
graph.addEdge(nodeD, nodeC);
graph.addEdge(nodeA, nodeC);
graph.addEdge(nodeC, nodeE);

graph.routeBetweenNodes(nodeA, nodeE);