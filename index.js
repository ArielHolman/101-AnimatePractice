let animationName = ""
let elementColor = ""
let elementMessage = ""
let elementsize = ""

// Can you use these two variables to change the type and text of the next element that's created?
let elementType = ""

// function that handles the input "animation-name"
const setAnimationName = (name) => {
  animationName = name
  console.log(animationName)
}

// function that handles the input "element-color"
const setElementColor = (color) => {
  elementColor = color
}

// function that handles the input "message"
const setElementMessage = (message) => {
  console.log(message)
  elementMessage = message
}

const setElementSize = (element) => {
  console.log(element)
  elementsize = element
}


// This function creates a new element and attaches to the parent element: element-collector
const createNewElement = () => {
  const elementContainer = document.getElementById("element-collector")
  
  // create a new element with default values
  const newElement = document.createElement(elementsize)
  const textNode = document.createTextNode(elementMessage)

  // Using dot.notation to access the new element's properties
  newElement.appendChild(textNode)
  newElement.classList.add("animated", "infinite", animationName)
  newElement.style.color = elementColor
  newElement.style.fontSize = elementsize

  // attach the new element to the parent
  elementContainer.appendChild(newElement)
}

