let button;
function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Go To deffinitly not an ad');
  button.position(width / 2, height / 2)
  button.mousePressed(goToLink)
}
function draw() {
  background(220);
}
function goToLink() {
  window.location.href = 'https://www.youtube.com/watch?v=a5NHUtOtjS0'; // Same tab
}


let links = [
    url,https://zoomquilt2.com/
    url,http://www.hardcoreprawnlawn.com/
    url,
]

let randomLink = link[random(link.length)]


function goToLink() {
    window.location.href = randomLink; // Same tab
  }