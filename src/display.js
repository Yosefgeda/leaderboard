const generatedInput = document.querySelector('.generated-input');
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const submitBtn = document.querySelector('.submit-btn');

export const displayScore = () => {
  const displayName = document.createElement('p');
  generatedInput.appendChild(displayName);
  displayName.textContent = `${inputName.value} : ${inputScore.value} `;
  inputName.value = '';
  inputScore.value = '';
};
