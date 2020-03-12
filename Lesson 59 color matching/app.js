/* eslint-disable no-eval */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */
let randButtonId = 1
let currentPlayer = 1
let p1Score = 0
let p2Score = 0

function setup() {
    setBoard()
   checkCorrect()
   
   function setBoard(){     
       
       
       // Get UI Elements
       
       const p1ScoreDisplay = select('#score1')
       const p2ScoreDisplay = select('#score2')
       const button1 = select('#button1')
       const button2 = select('#button2')
       const button3 = select('#button3')
       const button4 = select('#button4')
       
       let R = random(0,255)
       let G = random(0,255)
       let B = random(0,255)
       let color= `RGB(${R}, ${G}, ${B})`
       
       R +=20  //add 20 to current value of R
       G +=20
       B +=20

       let diffcolor = `RGB(${R}, ${G}, ${B})`
       randButtonId = `button${Math.floor(random(1, 5))}`
       select(`#${randButtonId}`).style('background-color', diffcolor)
       console.log(`correct button is: ${randButtonId}`)
       
       
       
       
       button1.style('background-color', color)
       button2.style('background-color', color)
       button3.style('background-color', color)
       button4.style('background-color', color)
       
       
    } 
    if(buttonId == randButtonId ) {
        console.log("You got it right!");
    } else {
        console.log("WRONG");
    }
}