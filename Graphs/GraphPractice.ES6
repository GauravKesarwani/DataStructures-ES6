// Directed Graph - Adjacency List Representation
	
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

		if (!src.edgeList.contains(dest)){
			src.edgeList.push(dest);
		}
	}

	printNodesInGraph() {
		for (let i = 0; i < this._vertices.length; i++) {
			console.log(this._vertices[i]);
		}
	}

	// Given a source vertex, do a depth first search on the Graph
	// Done
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
	  let visited = new Array(this._vertexCount);
	  let recStack = new Array(this._vertexCount);

	  visited.fill(false);
	  recStack.fill(false);

	  for (let i = 0; i < this._vertexCount; i++) {
	  	if (isCyclicUtil(this._vertices[i], visited, recStack)) {
	  		return true;
	  	}
	  }
	  return false;
	}

	isCyclicUtil(vertex, visited, recStack) {
		
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