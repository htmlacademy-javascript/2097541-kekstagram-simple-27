
const getData = (onSuccess) => {
  const serverAddres = 'https://27.javascript.pages.academy/kekstagram-simple/data';
  fetch(serverAddres)
    .then((response) => response.json())
    .then((photos) => {onSuccess(photos);});
};

const sendData = (onSuccess, onFail, body) => {
  const serverAddres = 'https://27.javascript.pages.academy/kekstagram-simple';
  fetch(
    serverAddres,
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
    } else{
      throw Error;
    }
  })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
