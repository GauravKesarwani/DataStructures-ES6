'use strict';

/* Adjacency List Implementation of Undirected Graph data structure 
   A graph is represented by vertices V and edges E.  G (V, E)
   unlike trees, graphs may contain cycles, so we may come to the same node again. 
   To avoid processing a node more than once, we use a boolean visited array
*/

// JavaScript 7th edition has includes

// check if the node exists in the graph. 

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Array.prototype.contains = function (name) {
  var i = this.length;
  while (i--) {
    if (this[i].name == name) {
      return true;
    }
  }
  return false;
};

var Node = function Node(name) {
  _classCallCheck(this, Node);

  this._name = name;
  this._edgeList = [];
};

// Graph contains a


var Graph = function () {
  function Graph(vertexCount) {
    _classCallCheck(this, Graph);

    this._vertexCount = vertexCount;
    this._node_list = [];
  }

  // Add an edge from node A to node B


  _createClass(Graph, [{
    key: 'addEdge',
    value: function addEdge(sourceNode, destinationNode) {
      var first = this._node_list.contains(sourceNode.name);
      var second = this._node_list.contains(destinationNode.name);

      // if the first node exists in the Graph add a reference to second node.
      if (first) {
        var i = this._node_list.length;

        while (i--) {
          if (this._node_list[i]._name === sourceNode.name) {
            this._node_list[i]._edgeList.push(destinationNode);
          }
          break;
        }
      }

      // if the second node exists in the Graph add a reference to the first node.
      if (second) {
        var _i = this._node_list.length;

        while (_i--) {
          if (this._node_list[_i].name === destinationNode.name) {
            this._node_list[_i]._edgeList.push(sourceNode);
          }
          break;
        }
      }

      // If neither the first node nor the second node exists in the Graph.
      if (!first || !second) {
        if (!first) {
          sourceNode.addEdge(end);
          this.node_list.push(sourceNode);
        }
        if (!second) {
          destinationNode.addEdge(sourceNode);
          this.node_list.push(destinationNode);
        }
      }
    }

    // Calculate the shortest path from src to all vertices of a Graph

  }, {
    key: 'dijkstra',
    value: function dijkstra(graph, src) {
      var shortestPathList = [];
      src.weight = 0;
      shortestPathList.push(src);

      // if the shortest path has not been calculated for all the vertices
      while (shortestPathList.length < graph._vertexCount) {
        shortestPathList.forEach(function (node, index, array) {
          // find the edge which has minimum weight

          var minimumEdge = Number.MAX_SAFE_INTEGER,
              minimumNode = null;

          node._edgeList.forEach(function (edge, index, array) {
            if (edge.weight + node.wight < minimumEdge) {
              minimumEdge = weight;
              minimumNode = array[index];
            }
          });

          minimumNode.weight = node.weight + minimumEdge;
        });
      }
    }
  }]);

  return Graph;
}();

var graph = new Graph();