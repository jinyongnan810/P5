console.log("hello");
function setup() {
    createCanvas(400, 400);
}

function draw() {
    if (mouseIsPressed) {
        fill(255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 255 * Math.random());
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80 * Math.random(), 80 * Math.random());
    rotate(frameCount / 20)
}