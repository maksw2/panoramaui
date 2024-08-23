const openPopupButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const body = document.body;

popup.style.display = 'none';

// msgbox buttons
const btn1El = document.querySelector('#msgBoxBtn1');
const btn2El = document.querySelector('#msgBoxBtn2');
const btn3El = document.querySelector('#msgBoxBtn3');
const btn4El = document.querySelector('#msgBoxBtn4');
const btn5El = document.querySelector('#msgBoxBtn5');
const btn6El = document.querySelector('#msgBoxBtn6');

function showMsgBox(
    title, text, btn1Text, btn2Text, btn3Text, btn4Text, btn5Text, btn6Text
  ) {
  const titleEl = document.querySelector('#msgBoxTitle');
  const textEl = document.querySelector('#msgBoxText');

  titleEl.textContent = title;
  textEl.textContent = text;

  btn1El.style.display = 'none';
  btn2El.style.display = 'none';
  btn3El.style.display = 'none';
  btn4El.style.display = 'none';
  btn5El.style.display = 'none';
  btn6El.style.display = 'none';

  if(btn1Text) {
    btn1El.style.display = 'block';
    btn1El.textContent = btn1Text;
  }
  if(btn2Text) {
    btn2El.style.display = 'block';
    btn2El.textContent = btn2Text;
  }
  if(btn3Text) {
    btn3El.style.display = 'block';
    btn3El.textContent = btn3Text;
  }
  if(btn4Text) {
    btn4El.style.display = 'block';
    btn4El.textContent = btn4Text;
  }
  if(btn5Text) {
    btn5El.style.display = 'block';
    btn5El.textContent = btn5Text;
  }
  if(btn6Text) {
    btn6El.style.display = 'block';
    btn6El.textContent = btn6Text;
  }

  popup.style.display = 'block';
  body.classList.add('darkened');
}

function closeExistingMsgBox() {
  popup.style.display = 'none';
  popup.classList.remove('closing');
  body.classList.remove('darkened'); // Remove darkened class after animation
}

/* u gotta add the event listeners manually */
btn1El.addEventListener('click', () => {
  closeExistingMsgBox();
});
btn2El.addEventListener('click', () => {
  closeExistingMsgBox();
});
btn3El.addEventListener('click', () => {
  const moreInfoElement = document.querySelector("#moreInfoContainer");
  moreInfoElement.style.display = 'block';
  closeExistingMsgBox();
});

openPopupButton.addEventListener('click', () => {
  showMsgBox('Alter Source versioning system', 
    "You are currently running an old version of Alter Source. Some features that may require internet connectivity won't work."
    , 'CONTINUE', 'QUIT GAME', 'MORE INFO...', null, null, null);
});

const infoCloseBtnEl = document.querySelector('#moreInfoBtnClose');
infoCloseBtnEl.addEventListener('click', () => {
  const moreInfoEl = document.querySelector('#moreInfoContainer'); 
  moreInfoEl.style.display = 'none';
});

// it wont switch the "display" back to "none"
// wtf?
popup.addEventListener('animationend', () => {
  if (popup.classList.contains('closing')) {
    popup.style.display = 'none';
    popup.classList.remove('closing');
    body.classList.remove('darkened'); // Remove darkened class after animation
  }
});