
const SERVER_ADDRES = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(`${SERVER_ADDRES}/data`)
    .then((response) => response.json())
    .then((photos) => {onSuccess(photos);});
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER_ADDRES,
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
