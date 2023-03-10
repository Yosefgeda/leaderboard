const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-score');
const reciver = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qVoyo0IhhBeGWoUuwCRg/scores';

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