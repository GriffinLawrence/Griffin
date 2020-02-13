
let bananaImg
let button
let greeting
function setup(){
    createCanvas(windowWidth, windowHeight)
    greeting = createElement('h2', 'Catch the banana')
    greeting.position(width / 2, height / 3)
    textAlign(CENTER)
    textSize(20)
    bananaImg = createImg('banana.png', 'banana image')
    bananaImg.size(200, 100)
    frameRate(1)
    bananaImg.mousePressed(youWon)
   
}
function draw(){
    bananaImg.position(random(width), random(height))

}
function youWon(){
greeting.html('You Won')
bananaImg.remove()

}