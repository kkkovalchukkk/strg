'use strict';

const ACTIVE_CLASSNAME = 'active';

const overlayEl = document.querySelector('.overlay');
const registerPopupEl = overlayEl.querySelector('#register-popup');
const loginPopupEl = overlayEl.querySelector('#login-popup');
const toggleRegisterPopupBtnEls = document.querySelectorAll(
  '.toggle-register-popup'
);
const toggleLoginPopupBtnEls = document.querySelectorAll('.toggle-login-popup');
const closePopupBtnEls = document.querySelectorAll('.popup-close-btn');

const showPopup = (popup, classname) => {
  window.addEventListener('keydown', closePopupByPressOnEsc);
  window.addEventListener('click', closePopupByClickOnOverlay);
  document.body.classList.add('no-scroll');
  overlayEl.classList.add(classname);
  popup.classList.add(classname);
};

const hidePopup = (popup, classname) => {
  window.removeEventListener('keydown', closePopupByPressOnEsc);
  window.removeEventListener('click', closePopupByClickOnOverlay);
  document.body.classList.remove('no-scroll');
  popup.classList.remove(classname);
  overlayEl.body.classList.remove(classname);
};

const closeAllPopups = (classname) => {
  overlayEl.classList.remove(classname);
  document.body.classList.remove('no-scroll');
  const popupEls = document.querySelectorAll('.popup');
  popupEls.forEach((p) => p.classList.remove(classname));
};

const closePopupByClickOnOverlay = (e) => {
  if (e.target === overlayEl) {
    closeAllPopups(ACTIVE_CLASSNAME);
  }
};

const closePopupByPressOnEsc = (e) => {
  if (e.key === 'Escape') {
    closeAllPopups(ACTIVE_CLASSNAME);
  }
};

toggleRegisterPopupBtnEls.forEach((b) =>
  b.addEventListener('click', () => {
    showPopup(registerPopupEl, ACTIVE_CLASSNAME);
  })
);
toggleLoginPopupBtnEls.forEach((b) =>
  b.addEventListener('click', () => {
    showPopup(loginPopupEl, ACTIVE_CLASSNAME);
  })
);

closePopupBtnEls.forEach((b) =>
  b.addEventListener('click', () => closeAllPopups(ACTIVE_CLASSNAME))
);

document.querySelectorAll('input[type="tel"').forEach((tel) =>
  IMask(tel, {
    mask: '+{7} (000) 000-00-00',
  })
);
