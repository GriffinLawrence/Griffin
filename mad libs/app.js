let outputDivUI
let inputDivUI


function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  addInputOutputElements()

  addTopic(
    'Door',
    'creature one creature two creature three creature four the creatures have lined up at your',
    ' hands up its the cops',
    true,false
  )
  addTopic(
    'place',
    'ten men walked into a bar located in ',
    ' five men walked out ',
    false,true
  )
  addTopic(
    'Bar name',
    'you were the only witness of the scene that happened in',
    ' tell us all you know or youll be locked up in prison ',
    false,false
  )
  addTopic(
    'Last Name',
    'Listen',
    ' We know your game and we can grill you all night long',
    false,false
  )
  addTopic(
    'Weapon onomatopoeia',
    'Italian voice: well too bad coppers you wont see sunrise',
    ' Lets get out of here now boss they will be hot on our tale',
    false,false
  )
  // Creates next button and styles it
  let outputDisplayBtn = createButton('NEXT')
  outputDisplayBtn.mousePressed(showOutputHandler)
  .parent(inputDivUI)

  function showOutputHandler() {
    outputDivUI.show()
    inputDivUI.hide()
  }
}

function addInputOutputElements() {
  createElement('h1', 'Mad Libs Game')
  createElement('h4', 'Enter Some Text to See The Result')

  inputDivUI = createDiv('').id('inputs')
  outputDivUI = createDiv('').id('outputs')
  outputDivUI.hide()
}

function addTopic(topic, intro, detail, uppercase, num) {
  createElement('p', `Name a ${topic.toUpperCase()}`)
    .id('input-label')
    .parent(inputDivUI)

  const inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI)

  inputFieldUI.changed(updateOutputHandler)

  function updateOutputHandler() {
    const output = createP('').parent(outputDivUI)
    // ADD CODE: convert the user input to lowercase by default
    let userInput = inputFieldUI.value().toLowerCase()

    // ADD CODE: convert to uppercase
    if (uppercase === true) {
      // ADD CODE: reassign userInput to be userInput.toUpperCase()
      userInput = userInput.toUpperCase()
    }

    // ADD CODE: CONVERT TO NUM
    


    // add if() statement that checks to see iff num === true.
    if(num === true){
      userInput = Number(userInput)
      userInput = userInput+30
    }
    
    // if true, convert userInput to a number and perform some math on it

    // OUTPUT BACK TO USER IN THE OUTPUT FIELD
    output.html(`${intro} ${userInput} ${detail}`)
  }
}