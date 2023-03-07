import './style.css';
import * as display from './display.js';

const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
  display.displayScore();
});