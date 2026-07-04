/**
 * Formats a number to a compact string (e.g. 1500 -> 1.5k)
 * @param {number} num 
 * @returns {string|number} Compact string representation
 */
export const formatNumber = (num) => {
  if (num === null || num === undefined) return 0;
  if (typeof num !== 'number') return num;

  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num;
};
