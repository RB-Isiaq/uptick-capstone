const API_BASE_URL = 'https://uptick-talent-api.onrender.com/api/';

export const postData = async function (route = '', data = {}) {
  const response = await fetch(`${API_BASE_URL}${route}`, {
    method: 'POST',
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });

  return response.json();
};

export const getData = async function (route = '') {
  const response = await fetch(`${API_BASE_URL}${route}`, {
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });

  return response.json();
};
