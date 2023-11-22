export const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('uptickAdmin');
  }
  return null;
};

export const setToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('uptickAdmin', token);
  }
};

export const clearToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('uptickAdmin');
  }
};
