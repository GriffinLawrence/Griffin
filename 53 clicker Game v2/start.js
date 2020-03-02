   let button;
   let greeting;
    function setup() {
      createCanvas(windowWidth, windowHeight);
    greeting = createElement('h2', 'Catch the banana or else you will lose')
    greeting.position(width / 2.5, height / 3)
    textAlign(CENTER)
    textSize(20)
      button = createButton('Go To game and definitely not an ad');
      button.position(width / 2.3, height / 2)
      button.mousePressed(startGame)
    } 
function startGame() {
  window.location.href = "game.html"
}