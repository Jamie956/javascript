//图
function Graph() {
  //储存所有顶点
  var vertices = []; //{1}
  //字典，key-顶点，value-邻接顶点列表
  var adjList = new Dictionary(); //{2}
  //添加一个新的顶点
  this.addVertex = function (v) {
    vertices.push(v); //{3}
    adjList.set(v, []); //{4}
  };
  this.addEdge = function (v, w) {
    adjList.get(v).push(w); //{5}
    adjList.get(w).push(v); //{6}
  };
  this.toString = function () {
    var s = '';
    for (var i = 0; i < vertices.length; i++) { //{10}
      s += vertices[i] + ' -> ';
      var neighbors = adjList.get(vertices[i]); //{11}
      for (var j = 0; j < neighbors.length; j++) { //{12}
        s += neighbors[j] + ' ';
      }
      s += '\n'; //{13}
    }
    return s;
  };

  var initializeColor = function () {
    var color = [];
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = 'white'; //{1}
    }
    return color;
  };
  //广度优先搜索算法，Breadth-First Search,BFS
  // this.bfs = function (v, callback) {
  //   var color = initializeColor(),
  //     queue = new Queue();
  //   queue.enqueue(v);
  //   while (!queue.isEmpty()) {
  //     var u = queue.dequeue(),
  //       neighbors = adjList.get(u); //{7}
  //     color[u] = 'grey';
  //     for (var i = 0; i < neighbors.length; i++) { // {9}
  //       var w = neighbors[i];
  //       if (color[w] === 'white') {
  //         color[w] = 'grey';
  //         queue.enqueue(w);
  //       }
  //     }
  //     color[u] = 'black'; // {14}
  //     if (callback) {
  //       callback(u);
  //     }
  //   }
  // };

  this.BFS = function (v) {
    var color = initializeColor(),
      queue = new Queue(),
      d = [],
      //{1}
      pred = []; //{2}
    queue.enqueue(v);
    for (var i = 0; i < vertices.length; i++) { //{3}
      d[vertices[i]] = 0;
      //{4}
      pred[vertices[i]] = null;
      //{5}
    }
    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u] = 'grey';
      for (i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          d[w] = d[u] + 1;
          //{6}
          pred[w] = u;
          //{7}
          queue.enqueue(w);
        }
      }
      color[u] = 'black';
    }
    return { //{8}
      distances: d,
      predecessors: pred
    };
  };
}


var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //{7}
for (var i = 0; i < myVertices.length; i++) { //{8}
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

//广度搜索测试
function printNode(value) { //{16}
  console.log('Visited vertex: ' + value); //{17}
}
graph.bfs(myVertices[0], printNode); //{18}

//
var shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);