
const MAIN_URL = 'https://27.javascript.pages.academy/kekstagram-simple';
const GET_URL = `${MAIN_URL}/data`;

const getData = (onSuccess) => {
  fetch(GET_URL)
    .then((response) => response.json())
    .then((photos) => {onSuccess(photos);});
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    MAIN_URL,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      return onSuccess();
    }
    throw new Error(`${response.status} — ${response.statusText}`);
  })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
