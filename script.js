// Selecting the DOM elements with the classes 'number' and 'generate'
const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

// Function to generate a random number between 1 and 20 and display it
const generateNumber = () => {
  // Generate a random number between 1 and 20
  const randomNumber = Math.floor(Math.random() * 20 + 1);
  
  // Display the generated number in the 'number' element
  number.innerHTML = randomNumber;
};

// Adding a click event listener to the 'generate' button, triggering the 'generateNumber' function
btn.addEventListener('click', generateNumber);

// Calling the 'generateNumber' function once to display a random number when the page loads
generateNumber();
