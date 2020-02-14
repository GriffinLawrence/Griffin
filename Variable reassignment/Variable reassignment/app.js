let slider;
const textInput;
function setup() {
    slider = createSlider(0, 360, 100);
    textInput = createInput("hello");
    createCanvas(600, 120); 
    colorMode(HSB);
}
function draw(){
  background(slider.value(), 100, 100);
  textSize(80);
    text(textInput.value(), 210, 100);

}