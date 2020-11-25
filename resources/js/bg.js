
var logonum = [];

function updateobj() {
    logonum.push(createobj(random(0, width), random(0, height)));
    logonum.shift();
}

function drawobj() {
    textAlign(CENTER, CENTER);
    ellipse(this.x, this.y, 120, 20);
    text('welcome to', this.x, this.y);
}

function createobj(ox, oy) {
    o = {x:ox, y:oy, drawfunc:drawobj}
    return o;
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    frameRate(10);
    for (var i = 0; i < 100; i++) {
        logonum[i] = createobj(random(0, width), random(0, height));
    }
}

function draw() {
    background(255); 
    for (var i = 0; i < logonum.length; i++) {
        logonum[i].drawfunc();
    }
    updateobj();
}