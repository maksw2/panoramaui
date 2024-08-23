const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const body = document.body;

openPopupButton.addEventListener('click', () => {
  popup.style.display = 'block';
  body.classList.add('darkened');
});

const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
  popup.classList.add('closing');
});

popup.addEventListener('animationend', () => {
  if (popup.classList.contains('closing')) {
    popup.style.display = 'none';
    popup.classList.remove('closing');
    body.classList.remove('darkened'); // Remove darkened class after animation
  }
});