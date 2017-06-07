const summitInput = document.querySelector('#summitInput');
const getSizeButton = document.querySelector('#getSizeButton');
summitInput.addEventListener('change', function inputChange(e) {
  const file = e.target.files[0];
  if (file) getSizeButton.removeAttribute('disabled', false);
});
