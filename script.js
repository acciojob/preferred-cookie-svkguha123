//your JS code here. If required.
const form = document.querySelector('form');

const fontSizeInput = document.getElementById('fontsize');

const fontColorInput = document.getElementById('fontcolor');




// Get the current font size and color from the CSS variables

const currentFontSize = getComputedStyle(document.body).getPropertyValue('--fontsize');

const currentFontColor = getComputedStyle(document.body).getPropertyValue('--fontcolor');




// Set the form input values to the current font size and color

fontSizeInput.value = parseInt(currentFontSize);

fontColorInput.value = currentFontColor;




// Add an event listener to the form

form.addEventListener('submit', function(event) {

  // Prevent the form from submitting and reloading the page

  event.preventDefault();




  // Set the new font size and color CSS variables

  document.documentElement.style.setProperty('--fontsize', fontSizeInput.value + 'px');

  document.documentElement.style.setProperty('--fontcolor', fontColorInput.value);




  // Store the font size and color values in cookies

  document.cookie = 'fontsize=' + fontSizeInput.value;

  document.cookie = 'fontcolor=' + fontColorInput.value;

});




// Read the font size and color values from cookies and apply them to the page

document.cookie.split(';').forEach(function(cookie) {

  const [name, value] = cookie.split('=');

  if (name.trim() === 'fontsize') {

    document.documentElement.style.setProperty('--fontsize', value + 'px');

    fontSizeInput.value = parseInt(value);

  } else if (name.trim() === 'fontcolor') {

    document.documentElement.style.setProperty('--fontcolor', value);

    fontColorInput.value = value;

  }

});