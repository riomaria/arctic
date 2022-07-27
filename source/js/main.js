import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Smooth navigation

  const anchorMenu = document.querySelectorAll('a[href^="#"]');

  anchorMenu.forEach((item) => {

    item.addEventListener('click', (evt) => {
      evt.preventDefault();

      const blockId = item.getAttribute('href');
      document.querySelector('' + blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

  // Mobile navigation

  const mainPage = document.querySelector('.wrapper');
  const pageOverlay = mainPage.querySelector('.wrapper__overlay');
  const mainHeader = document.querySelector('.main-header');
  const mainNavigation = mainHeader.querySelector('.main-navigation');
  const logoHeader = mainHeader.querySelector('.logo-header');
  const menuToggle = mainHeader.querySelector('.main-navigation__toggle');
  const itemMenu = mainHeader.querySelectorAll('.main-navigation a');
  const mapBlock = mainPage.querySelector('.map');

  mainHeader.removeAttribute('data-js');
  mapBlock.removeAttribute('data-js');

  menuToggle.addEventListener('click', () => {
    if (mainHeader.hasAttribute('data-state')) {
      mainPage.removeAttribute('data-state');
      mainHeader.removeAttribute('data-state');
      mainNavigation.removeAttribute('data-state');
      logoHeader.removeAttribute('data-state');
    } else {
      mainPage.setAttribute('data-state', 'is-open');
      mainHeader.setAttribute('data-state', 'is-open');
      mainNavigation.setAttribute('data-state', 'is-open');
      logoHeader.setAttribute('data-state', 'is-open');
    }
  });

  itemMenu.forEach((item) => {
    item.addEventListener('click', () => {
      mainPage.removeAttribute('data-state');
      mainHeader.removeAttribute('data-state');
      mainNavigation.removeAttribute('data-state');
      logoHeader.removeAttribute('data-state');
    });
  });

  pageOverlay.addEventListener('click', () => {
    mainPage.removeAttribute('data-state');
    mainHeader.removeAttribute('data-state');
    mainNavigation.removeAttribute('data-state');
    logoHeader.removeAttribute('data-state');
  });

  // ---------------------------------
  // Submit default

  const inputName = document.querySelector('#user-name');
  const inputPhone = document.querySelector('#user-phone');
  const inputMail = document.querySelector('#user-mail');
  const submitForm = document.querySelector('.booking__form');

  submitForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    localStorage.setItem('userName', inputName.value);
    localStorage.setItem('userPhone', inputPhone.value);
    localStorage.setItem('userMail', inputMail.value);

    inputName.value = '';
    inputPhone.value = '';
    inputMail.value = '';
  });

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
