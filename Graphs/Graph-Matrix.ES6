'use strict';

/* 
	Adjacency Matrix Representation of a Directed Graph Data Structure in JavaScript
*/

class Graph {
	constructor(vertexCount) {
		this._vertexCount = vertexCount;
		this._adjMatrix = new Array(vertexCount);							// create a two dimensional matrix
		this._adjMatrix.fill(new Array(vertexCount).fill(false));
	}

	addEdge(i, j) {
		if (i >=0 && i < this._vertexCount && j >=0 && j < this._vertexCount) {
			this._adjMatrix[i][j] = true
		}
	}

	dijkstra(src) {
		let distance = new Array(this._vertexCount),
      sptSet = new Array(this._vertexCount);    //sptSet[i] will be true if shortest distnace 

    distance.fill(Number.MAX_VALUE);  
    sptSet.fill(false);

    distance[src] = 0;

    // find the shortest path for all the vertices
    for (let i = 0; i < this._vertexCount; i++) {
    	let u = this.minDistance(distance, sptSet);

    	sptSet[u] = true;

    	// Update the distance value of the adjacent vertices of picked vertex
    	for (let v = 0; v < this._vertexCount; v++) {
    		if (!sptSet[v] && this._adjMatrix[u][v] !== 0 && distance[u] + this._adjMatrix[u][v] < distance[v]) {
    			distance[v] = distance[u] + this._adjMatrix[u][v];
    		}
    	}
    }
  }
}

let g = new Graph(4);

console.log(g._adjMatrix);