"use strict";

var canvas = document.getElementById("inner_heading-canvas");

var mousePos = {
  x: 0,
  y: 0,
};

if (canvas.getContext) {
  var context = canvas.getContext("2d");
}

window.addEventListener("load", init, false);

window.addEventListener("mousemove", printMouse, false);
window.addEventListener("touchmove", printMouse, false);

var timeoutID = null;
var rafID = null;

window.addEventListener(
  "resize",
  function () {
    clearTimeout(timeoutID);
    window.cancelAnimationFrame(rafID);
    timeoutID = setTimeout(init, 500);
  },
  false
);

// Init
function init() {
  var net = undefined;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var nodesLength = Math.floor((canvas.width * canvas.height) / 3000);

  // Nodes
  net = new Net();
  net.populate(nodesLength);

  rafID = window.requestAnimationFrame(render);

  function render(e) {
    net.update();
    net.draw();
    net.connect(120);
    rafID = window.requestAnimationFrame(render);
  }
}

// Net
class Net {
  constructor() {
    this.nodes = [];
    this.length = undefined;
  }

  populate(length) {
    this.length = length;

    for (var i = 0; i < length; i++) {
      var xPos = Math.floor(getRandom(0, canvas.width));
      var yPos = Math.floor(getRandom(0, canvas.height));
      this.nodes.push(new Node(xPos, yPos));
    }
  }

  update() {
    for (var i = 0; i < this.length; i++) {
      this.nodes[i].update();
    }
  }

  draw() {
    context.fillStyle = "#01070C";
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < this.length; i++) {
      this.nodes[i].draw();
    }
  }

  connect(distanceMax) {
    // Loop through all nodes
    for (var i = 0; i < this.length - 1; i++) {
      this.nodes[i].connections = [];

      // Store connected nodes in node object
      for (var j = 0; j < this.length - 1; j++) {
        var a = this.nodes[j].x - this.nodes[i].x;
        var b = this.nodes[j].y - this.nodes[i].y;
        var c = Math.sqrt(a * a + b * b);

        var xToMouse = this.nodes[j].x - mousePos.x;
        var yToMouse = this.nodes[j].y - mousePos.y;
        this.nodes[i].dToMouse = Math.floor(
          Math.sqrt(xToMouse * xToMouse + yToMouse * yToMouse)
        );

        var d = (distanceMax / this.nodes[i].dToMouse) * 200;

        if ((distanceMax / this.nodes[i].dToMouse) * 200 > distanceMax) {
          d = distanceMax;
        }

        if (j > i && c < d) {
          this.nodes[i].connections.push(j);
        }
      }

      // Draw line between dots
      for (var k = 0; k < this.nodes[i].connections.length; k++) {
        context.beginPath();
        context.moveTo(this.nodes[i].x, this.nodes[i].y);
        context.lineTo(
          this.nodes[this.nodes[i].connections[k]].x,
          this.nodes[this.nodes[i].connections[k]].y
        );
        context.strokeStyle = "rgba(183,7,0" + this.nodes[i].depth / 4 + ")";
        context.stroke();
      }
    }
  }
}

// Node
class Node {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.radius = 2;
    this.depth = Math.floor(getRandom(1, 10)) / 10;
  }

  update() {
    var velocity = (1 - this.depth) * 2;
    this.x = this.x + velocity;

    if (this.x > canvas.width || this.x < 0) {
      this.x = 0;
    }
  }

  draw() {
    var alpha = 1 - this.depth;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = "rgba(244,0,0" + alpha + ")";
    context.fill();
  }
}

// Helpers
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Mouse

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect(), // abs. size of element
    scaleX = canvas.width / rect.width, // relationship bitmap vs. element for X
    scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y

  return {
    x: (evt.clientX - rect.left) * scaleX, // scale mouse coordinates after they have
    y: (evt.clientY - rect.top) * scaleY, // been adjusted to be relative to element
  };
}

function printMouse(e) {
  var c = canvas;
  var pos = getMousePos(c, e);
  mousePos = pos;
}

// Stats
var stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

function animate() {
  stats.begin();
  stats.end();

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
