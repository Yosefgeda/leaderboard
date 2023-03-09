const gameName = { name: 'My cool new game' };
const reciver = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

const getId = async () => {
  const options = {
    method: 'POST',
    body: JSON.stringify(gameName),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(reciver, options);
  const result = await response.json();
};

getId();
// qVoyo0IhhBeGWoUuwCRg