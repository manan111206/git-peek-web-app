// Hex colors matching GitHub's color markers
const colors = {
  javascript: '#f1e05a',
  typescript: '#3178c6',
  python: '#3572a5',
  java: '#b07219',
  go: '#00add8',
  rust: '#dea584',
  php: '#4f5d95',
  'c#': '#178600',
  'c++': '#f34b7d',
  c: '#555555',
  html: '#e34c26',
  css: '#563d7c',
  ruby: '#701516',
  shell: '#89e051',
  swift: '#f05138',
  kotlin: '#a97bff',
  r: '#198ce7',
  objectivec: '#438eff',
  vue: '#41b883',
  dart: '#00b4ab',
  scala: '#c22d40',
};

/**
 * Gets color hex associated with a language name
 * @param {string} languageName 
 * @returns {string} Hex color code
 */
export const getLanguageColor = (languageName) => {
  if (!languageName) return '#64748b'; // Fallback slate color
  const key = languageName.toLowerCase().trim();
  return colors[key] || '#64748b';
};
export default getLanguageColor;
