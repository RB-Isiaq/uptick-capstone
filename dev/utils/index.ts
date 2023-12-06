export function truncateText(text: string): string {
  const words = text.split(' ');
  const first50Words = words.slice(0, 50).join(' ');
  const truncatedText = words.length > 50 ? first50Words + '...' : first50Words;
  return truncatedText;
}
export const truncateWords = (text: string) => {
  const words = text.split(' ');
  const firstShortWords = words.slice(0, 15).join(' ');
  const truncatedText =
    words.length > 16 ? firstShortWords + '...' : firstShortWords;
  return truncatedText;
};

export const getDate = () => {
  const specificDate = new Date();
  const option: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return specificDate.toLocaleDateString('en-US', option);
};
