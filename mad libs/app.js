let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('lightgray')

  addInputOutputElements()

  addTopic(
    'Door',
    'creature one creature two creature three creature four the creatures have lined up at your',
    ' hands up its the cops'
  )
  addTopic(
    'place',
    'ten men walked into a bar located in ',
    ' five men walked out ',
  )
  addTopic(
    'Bar name',
    'you were the only witness of the scene that happened in',
    ' tell us all you know or youll be locked up in prison ',
  )
  s = string.toUpperCase()
  s = string.toUpperCase()
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

function addTopic(topic, intro, detail) {
  createElement('p', `Name a ${topic.toUpperCase()}`)
    .id('input-label')
    .parent(inputDivUI)

  let inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI)

  inputFieldUI.changed(updateOutputHandler)

  let output = createP('').parent(outputDivUI)

  function updateOutputHandler() {
    output.html(intro + inputFieldUI.value() + detail)
  }
}