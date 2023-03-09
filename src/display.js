const generatedInput = document.querySelector('.generated-input');
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const reciver = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qVoyo0IhhBeGWoUuwCRg/scores';

// export const displayScore = () => {
//   const displayName = document.createElement('p');
//   generatedInput.appendChild(displayName);
//   displayName.textContent = `${inputName.value} : ${inputScore.value} `;
//   inputName.value = '';
//   inputScore.value = '';
// }

export const sendData = async () => {
  const userName = inputName.value;
  const userScore = inputScore.value;

  const data = {
    user: userName,
    score: userScore,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  await fetch(reciver, options);
  inputName.value = '';
  inputScore.value = '';
};