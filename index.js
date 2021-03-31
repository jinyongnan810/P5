console.log("hello");
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    if (mouseIsPressed) {
        fill(255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 255 * Math.random());
        ellipse(mouseX, mouseY, 120 * Math.random(), 120 * Math.random());
        rotate(frameCount / 20)
    } else {
        // fill(255);
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight, true);
}