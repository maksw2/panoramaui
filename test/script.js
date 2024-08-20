const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('confirmationPopup');
const exitButton = document.querySelector('.exit-button');
const returnButton = document.querySelector('.return-button');

function showPopup() {
  popup.style.display = 'block';
}

function hidePopup() {
  popup.style.display = 'none';
}

openPopupButton.addEventListener('click', showPopup);

exitButton.addEventListener('click', () => {
  // Add your exit logic here
  console.log('Exiting...');
  hidePopup();
});

returnButton.addEventListener('click', () => {
  // Add your return logic here
  console.log('Returning...');
  hidePopup();
});