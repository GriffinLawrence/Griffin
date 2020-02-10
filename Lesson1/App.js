
let button
let greeting
function setup() {
  createCanvas(windowWidth, windowHeight)
  button = createButton('Find out');
  button.position(width / 2, height / 2)
  button.mousePressed(greet)
  greeting = createElement('h2', 'Want to know?')
  greeting.position(width / 2, height / 3)
  textAlign(CENTER)
  textSize(20)
}
function greet() {
  greeting.html('They know where you are, read and run!')
  for (let i = 0; i < 20; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height))
    text('All the birds died in 1986 due to raegan killing them and replacing them with spies that are now watching us. The birds work for the bourgeoisie.', 0, 0);
    pop();
  }
}
