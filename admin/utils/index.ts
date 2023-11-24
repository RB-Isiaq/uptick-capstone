export function truncateText(text: string): string {
  const words = text.split(' ');
  const first50Words = words.slice(0, 50).join(' ');
  const truncatedText = words.length > 50 ? first50Words + '...' : first50Words;
  return truncatedText;
}

export const getDate = (): string => {
  const specificDate = new Date();
  const option: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return specificDate.toLocaleDateString('en-US', option);
};
