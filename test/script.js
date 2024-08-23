const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const body = document.body;

// msgbox buttons
const btn1El = document.querySelector('#msgBoxBtn1');
const btn2El = document.querySelector('#msgBoxBtn2');

function showMsgBox(title, text, btn1Text, btn2Text) {
  const titleEl = document.querySelector('#msgBoxTitle');
  const textEl = document.querySelector('#msgBoxText');

  // msgbox buttons
  const btn1El = document.querySelector('#msgBoxBtn1');
  const btn2El = document.querySelector('#msgBoxBtn2');

  titleEl.textContent = title;
  textEl.textContent = text;

  btn1El.style.display = 'none';
  btn2El.style.display = 'none';

  if(btn1Text) {
    btn1El.style.display = 'block';
    btn1El.textContent = btn1Text;
  }
  if(btn2Text) {
    btn2El.style.display = 'block';
    btn2El.textContent = btn2Text;
  }

  popup.style.display = 'block';
  body.classList.add('darkened');
}

openPopupButton.addEventListener('click', () => {
  showMsgBox('hi', 'text', 'this is a button', 'dear god');
});

/* u gotta add the event listeners manually */
btn1El.addEventListener('click', () => {
  popup.classList.add('closing');
});
btn2El.addEventListener('click', () => {
  popup.classList.add('closing');
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