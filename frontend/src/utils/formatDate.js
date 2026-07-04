/**
 * Formats a date string into a user-friendly format (e.g., "Oct 29, 2013")
 * @param {string|Date} dateVal 
 * @returns {string} Formatted date
 */
export const formatDate = (dateVal) => {
  if (!dateVal) return 'N/A';
  const date = new Date(dateVal);
  if (isNaN(date.getTime())) return 'N/A';
  
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

/**
 * Returns a relative time string (e.g. "3 days ago")
 * @param {string|Date} dateVal
 */
export const timeAgo = (dateVal) => {
  if (!dateVal) return 'N/A';
  const date = new Date(dateVal);
  if (isNaN(date.getTime())) return 'N/A';

  const seconds = Math.floor((new Date() - date) / 1000);
  
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return `${interval} year${interval > 1 ? 's' : ''} ago`;
  
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return `${interval} month${interval > 1 ? 's' : ''} ago`;
  
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return `${interval} day${interval > 1 ? 's' : ''} ago`;
  
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return `${interval} hour${interval > 1 ? 's' : ''} ago`;
  
  interval = Math.floor(seconds / 60);
  if (interval >= 1) return `${interval} minute${interval > 1 ? 's' : ''} ago`;
  
  return 'just now';
};
