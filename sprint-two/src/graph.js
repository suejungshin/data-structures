

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.storage[node] === undefined) {
    this.storage[node] = {'edge': []};
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.storage) {
    if (Number(key) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.storage) {
    if (node === Number(key)) {
      if (this.storage[key].edge.length !== 0) {
        var inner = this.storage[key].edge;
        for (var i = 0; i < inner.length; i++) {
          var whatToDelete = this.storage[node].edge[i];
          var nodeToDeleteFrom = this.storage[whatToDelete];
          var indexofthingToDelete = nodeToDeleteFrom.edge.indexOf(node);
          nodeToDeleteFrom.edge.splice(indexofthingToDelete, 1);
        }
      }
      delete this.storage[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (this.storage[fromNode].edge.includes(toNode)) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edge.push(toNode);
  this.storage[toNode].edge.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (var key in this.storage) {
    if (key === fromNode.toString()) {
      var inner = this.storage[key].edge;
      for (var i = 0; i < inner.length; i ++) {
        if (inner[i] === toNode) {
          inner.splice(i, 1);
        }
      }
    }
  }
  for (var key in this.storage) {
    if (key === toNode.toString()) {
      var inner = this.storage[key].edge;
      for (var i = 0; i < inner.length; i ++) {
        if (inner[i] === fromNode) {
          inner.splice(i, 1);
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// The time comlexity for addNode O(1), O(n) for contains, O(n^2) for removing, O(n) for forEachNode