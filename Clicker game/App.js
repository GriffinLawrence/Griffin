let heading 
let bananaImg
let button
let greeting
function setup(){
    createCanvas(windowWidth, windowHeight)
    button = createButton('Click for game');
    button.position(width / 2, height / 2)
    button.mousePressed(greet)
    greeting = createElement('h2', 'Catch the banana')
    greeting.position(width / 2, height / 3)
    textAlign(CENTER)
    textSize(20)
    bananaImg = createImg('/banana.png', 'banana image')
    bananaImg.size(200, 100)
    heading =  createElement('h2', 'Click The Banana!')
    heading.position(width / 3, height / 4)
}
function draw(){
    bananaImg.position(random(width), random(height))
}
