export const getToken = () => {
  return localStorage.getItem('uptickAdmin');
};
export const setToken = (token: string) => {
  localStorage.setItem('uptickAdmin', token);
};
export const clearToken = () => {
  localStorage.removeItem('uptickAdmin');
};
