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

export function truncateText(text: string): string {
  const words = text.split(' ');
  const first50Words = words.slice(0, 50).join(' ');
  const truncatedText = words.length > 50 ? first50Words + '...' : first50Words;
  return truncatedText;
}
