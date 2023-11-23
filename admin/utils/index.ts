export function truncateText(text: string): string {
  const words = text.split(' ');
  const first50Words = words.slice(0, 50).join(' ');
  const truncatedText = words.length > 50 ? first50Words + '...' : first50Words;
  return truncatedText;
}
