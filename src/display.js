const generatedInput = document.querySelector('.generated-input');
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');


export const displayScore = () => {
  const displayName = document.createElement('p');
  generatedInput.appendChild(displayName);
  displayName.textContent = `${inputName.value} : ${inputScore.value} `;
  inputName.value = '';
  inputScore.value = '';
}
