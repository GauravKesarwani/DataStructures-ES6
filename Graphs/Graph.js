'use strict';

/* Adjacency List Implementation of Undirected Graph data structure 
   A graph is represented by vertices V and edges E.  G (V, E)
   unlike trees, graphs may contain cycles, so we may come to the same node again. 
   To avoid processing a node more than once, we use a boolean visited array
*/

// JavaScript 7th edition has includes

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

class Node {
  constructor(name) {
    this._name = name;
    this._edgeList = [ ];
  }
}

// Graph contains a
class Graph {
	constructor(vertexCount) {
      this._vertexCount = vertexCount;
      this._node_list = [ ];
    }

    // Add an edge from node A to node B
    addEdge(sourceNode, destinationNode) {
      let first = this._node_list.contains(sourceNode.name);
      let second = this._node_list.contains(destinationNode.name);

      // if the first node exists in the Graph add a reference to second node.
      if (first) {
        let i = this._node_list.length;

        while(i--) {
          if (this._node_list[i]._name === sourceNode.name) {
            this._node_list[i]._edgeList.push(destinationNode);
          }
          break;
        }
      }

      // if the second node exists in the Graph add a reference to the first node.
      if (second) {
        let i = this._node_list.length;

        while(i--) {
          if (this._node_list[i].name === destinationNode.name) {
            this._node_list[i]._edgeList.push(sourceNode);
          }
          break;
        }
      }

        // If neither the first node nor the second node exists in the Graph.
    if( (!first) || (!second) ){
      if( !first ){
          sourceNode.addEdge(end);
          this.node_list.push(sourceNode);
      }
      if( !second ){
          destinationNode.addEdge(sourceNode);
          this.node_list.push(destinationNode);
      }
    } 
    }
}
