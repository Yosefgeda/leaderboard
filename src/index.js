import './style.css';
import * as display from './display.js';
import * as appendData from './generateData.js';

const submitBtn = document.querySelector('.submit-btn');
const refreshBtn = document.querySelector('.refresh');

submitBtn.addEventListener('click', () => {
  display.sendData();
});

refreshBtn.addEventListener('click', () => {
  appendData.seeData();
});
