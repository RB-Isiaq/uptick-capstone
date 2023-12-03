const API_BASE_URL = 'https://uptick-talent-api.onrender.com/api/';

export const postData = async function (route = '', data = {}) {
  const response = await fetch(`${API_BASE_URL}${route}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
export const postFile = async function (route = '', data = new FormData()) {
  const response = await fetch(`${API_BASE_URL}${route}`, {
    method: 'POST',
    body: data,
  });

  return response.json();
};

export const updateData = async function (route = '', data = {}) {
  const response = await fetch(`${API_BASE_URL}${route}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
export const deleteData = async function (route = '') {
  const response = await fetch(`${API_BASE_URL}${route}`, {
    method: 'DELETE',
  });

  return response.json();
};

export const getData = async function (route = '') {
  const response = await fetch(`${API_BASE_URL}${route}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
};
