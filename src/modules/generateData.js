const reciver = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qVoyo0IhhBeGWoUuwCRg/scores/';
const generatedInput = document.querySelector('.generated-input');

export const seeData = async () => {
  const response = await fetch(reciver, { method: 'GET' });
  const result = await response.json();

  generatedInput.innerHTML = '';
  for (let i = 0; i < result.result.length; i += 1) {
    const displayName = document.createElement('p');
    generatedInput.appendChild(displayName);
    displayName.textContent = `${result.result[i].user} : ${result.result[i].score} `;
  }
};
