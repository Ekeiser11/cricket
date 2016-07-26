var chirp;
var cricket;

//image
var img;
function preload() {
  img = loadImage("assets/background.jpg");
}

function setup() {
  createCanvas(400, 400);
  image(img, 0, 0);
//soundfile
  soundFormats('mp3', 'ogg');
  chirp = loadSound('assets/cricket.mp3');
  cricket = new Cricket(width/2, height/2, 64);
}

function draw() {
  background(img);
  cricket.display(mouseX, mouseY);
}

function mousePressed() {
  if (cricket.contains(mouseX, mouseY)) {
    chirp.play();
  }
}

var Cricket = function(x_, y_, r_) {
  // Location and size
  var x = x_;
  var y = y_;
  var r = r_;

  this.contains = function(mx, my) {
    if (dist(mx, my, x, y) < r) {
      return true;
    } else {
      return false;
    }
  };


  this.display = function(mx, my) {
    if (this.contains(mx, my)) {
      fill(100,0);
    } else {
      fill(175,0);
    }
    stroke(0);
    strokeWeight(0);
    ellipse(x, y, r, r);
  };
};