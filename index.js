const gridContainer = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.reset-btn');
let gridArray = [];


// Function to creat the grid based on a particular size
const createGrid = (size) => {
  //Clear Existing Grid
  gridContainer.replaceChildren();
  gridArray = [];

  //get size of the grid square
  sizeSquare = size*size;

  //push an element into the array for each square required.
  for (let i = 0; i < sizeSquare; i++) {

    gridArray.push(document.createElement('div'));
    
  }

  //For each item in the grid
  gridArray.forEach(element => {
    //Setup event listener to change background on hover
    element.addEventListener('mouseover', () => {
      element.style.background = "black";
    });
    //Add to the container
    gridContainer.appendChild(element);
  });

  //Set the size of the grid so that it will always be a square.
  gridContainer.setAttribute('style', 'grid-template-columns: repeat(' + size + ',1fr)')
}

//Setup onclick event for reset button
resetBtn.onclick = () => {
  let newSize = prompt("What size should the new grid be?");

  //Make sure size is a number before resetting
  if(isNaN(newSize) == false){
    createGrid(newSize);
  } else {
    alert("Input was not a number. Please try again.");
  }
}




createGrid(4);