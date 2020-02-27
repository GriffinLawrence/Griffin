   let button;
   let greeting
    function setup() {
      createCanvas(windowWidth, windowHeight);
    greeting = createElement('h2', 'Catch the banana or else you will lose')
    greeting.position(width / 2.5, height / 3)
    textAlign(CENTER)
    textSize(20)
      button = createButton('Go To game and definitely not an ad');
      button.position(width / 2.3, height / 2)
      button.mousePressed(goToLink)
    } 
    function goToLink() {
        window.location.href = links; // Same tab
      }
      let links = [
        url,https /zoomquilt2.com/
        url,http /127.0.0.1:5500/53%20clicker%20Game%20v2/game.html
    ]