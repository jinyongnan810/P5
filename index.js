console.log("hello");
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    if (mouseIsPressed) {
        // push()
        stroke(0, 0, 0, 0);
        fill(255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 255 * Math.random());
        translate(mouseX, mouseY)
        rotate(2 * PI * Math.random())
        ellipse(0, 0, 120 * Math.random(), 120 * Math.random());
        // pop()
    } else {
        // fill(255);
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight, true);
}