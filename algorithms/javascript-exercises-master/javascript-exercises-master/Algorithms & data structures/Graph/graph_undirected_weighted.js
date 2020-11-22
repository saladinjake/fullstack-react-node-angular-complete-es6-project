// Create constructor for Graph
function Graph() {
    this.vertices = new Set();
    this.edges = {};
    this.numberOfEdges = 0;
}

// Function to add an edge to the graph
Graph.prototype.addEdge = function(vertex1, vertex2, weight) {
    if (!this.vertices.has(vertex1)) {
        this.vertices.add(vertex1);
        this.edges[vertex1] = [{"vertex": vertex2, "weight": weight}];
    } else {
        this.edges[vertex1].push({"vertex": vertex2, "weight": weight});
    }
    if (!this.vertices.has(vertex2)) {
        this.vertices.add(vertex2);
        this.edges[vertex2] = [{"vertex": vertex1, "weight": weight}];
    } else {
        this.edges[vertex2].push({"vertex": vertex1, "weight": weight});
    }

    this.numberOfEdges++;
};

// Function to remove an edge from the graph
Graph.prototype.removeEdge = function(vertex1, vertex2) {
    let index1 = this.edges[vertex1].findIndex(e => e.vertex === vertex2);
    let index2 = this.edges[vertex2].findIndex(e => e.vertex === vertex1);
    if (index1 !== -1) {
        this.edges[vertex1].splice(index1, 1);
        this.numberOfEdges--;
    }
    if (index2 !== -1) {
        this.edges[vertex2].splice(index2, 1);
    }
};

// Function to remove a vertex from the graph
Graph.prototype.removeVertex = function(vertex) {
    this.vertices.delete(vertex);
    this.edges[vertex].forEach((neighbour) => {
        this.removeEdge(neighbour.vertex, vertex);
    });
    delete this.edges[vertex];
};

// Function to get the number of vertices in the graph
Graph.prototype.size = function() {
    return this.vertices.size;
};

// Function to get the number of edges in the graph
Graph.prototype.relations = function() {
    return this.numberOfEdges;
};

// Depth-First Search traversal. Uses DFSUtils()
Graph.prototype.traverseDFS = function(vertex) {
    if(!this.vertices.has(vertex)) {
        return console.log('Vertex not found');
    }

    let path = []; // store the visited nodes in order

    // Mark all vertices as non-visited
    let visited = {};
    this.vertices.forEach(function(vertex) {
        visited[vertex] = false;
    });

    // Call the recursive helper function DFSUtils()
    this.DFSUtils(vertex, visited, path);

    return path
};

// Function used by traverseDFS
Graph.prototype.DFSUtils = function(vertex, visited, path) {
    // mark the current node as visited
    visited[vertex] = true;
    path.push(vertex);

    // Recur for all vertices adjacent (not yet visited) to this vertex
    this.edges[vertex].forEach((neighbour) => {
        if (visited[neighbour.vertex] === false) {
            this.DFSUtils(neighbour.vertex, visited, path)
        }
    });
};

// Breadth-First Search traversal
Graph.prototype.traverseBFS = function(vertex) {
    if(!this.vertices.has(vertex)) {
        return console.log('Vertex not found');
    }
    let path = []; // store the visited nodes in order
    let queue = [];

    // Mark all vertices as non-visited
    let visited = {};
    this.vertices.forEach(function(vertex) {
        visited[vertex] = false;
    });

    // mark the source node as visited and enqueue it
    path.push(vertex);
    queue.push(vertex);
    visited[vertex] = true;

    while (queue.length) {
        // Dequeue a vertex
        vertex = queue.shift();

        // get all adjacent vertices of the dequeued vertex.
        // If adjacent has not been visited, mark it and enqueue it.
        this.edges[vertex].forEach((neighbour) => {
            if (visited[neighbour.vertex] === false) {
                path.push(neighbour.vertex);
                queue.push(neighbour.vertex);
                visited[neighbour.vertex] = true;
            }
        });
    }
    return path
};

// Implementation of Djikstra's single source shortest path algorithm
Graph.prototype.djikstraShortestPath = function (vertex) {
    let dist = {};
    let sptSet = {};
    this.vertices.forEach(function(vertex) {
        dist[vertex] = Infinity;
        sptSet[vertex] = false;
    });
    dist[vertex] = 0;

    this.vertices.forEach((vertex) => {
        // Pick the minimum distance vertex from the set of
        // vertices not yet processed
        let u = this.minDistanceUtils(dist, sptSet);

        sptSet[u] = true; // update shortest path set

        // Update distance value of the adjacent vertices of the picked
        // vertex only if the current distance is greater than new distance
        // and the vertex is not in shortest path set
        this.edges[u].forEach(function(neighbour) {
            if (neighbour.weight > 0 && sptSet[neighbour.vertex] === false &&
                dist[neighbour.vertex] > dist[u] + neighbour.weight) {
                dist[neighbour.vertex] = dist[u] + neighbour.weight;
            }
        });
    });
    return dist;
};

// Utility function to find the vertex with the minimum distance value
// not yet in the shortest path set:
Graph.prototype.minDistanceUtils = function(dist, sptSet) {
    let min = Infinity;
    let min_vertex = null;

    // Search nearest vertex not already in the shortest path set:
    this.vertices.forEach(function(vertex) {
        if (dist[vertex] <= min && sptSet[vertex] === false) {
            min = dist[vertex];
            min_vertex = vertex;
        }
    });
    return min_vertex;
};



var graph = new Graph();
graph.addEdge(1, 2, 1);
graph.addEdge(1, 4, 1);
graph.addEdge(1, 5, 1);
graph.addEdge(2, 3, 1);
graph.addEdge(2, 5, 1);
graph.addEdge(3, 5, 1);
graph.addEdge(3, 6, 1);
graph.addEdge(3, 7, 1);
graph.addEdge(4, 5, 1);
graph.addEdge(5, 6, 1);
graph.addEdge(6, 7, 1);


console.log(graph.edges);
console.log(graph.traverseDFS(1));
console.log(graph.traverseBFS(1));

dist = graph.djikstraShortestPath(1);
console.log(dist);