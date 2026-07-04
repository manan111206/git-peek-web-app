/**
 * Global Error Handler Middleware
 */
const errorHandler = (err, req, res, next) => {
  console.error('Error occurred in backend API:');
  console.error(err.stack || err.message || err);

  let statusCode = err.status || err.response?.status || 500;
  let message = err.message || 'Internal Server Error';

  // Handle GitHub API specific response error blocks
  if (err.response) {
    const ghData = err.response.data;
    const ghMessage = ghData?.message || '';

    if (statusCode === 403 && ghMessage.includes('rate limit exceeded')) {
      message = 'GitHub API rate limit exceeded. Please wait a while or authenticate with a personal access token.';
    } else if (statusCode === 401) {
      message = 'GitHub authentication token invalid. Check your GITHUB_TOKEN environment variable.';
    } else if (ghMessage) {
      message = `GitHub API Error: ${ghMessage}`;
    }
  }

  // Handle Mongoose cast errors (invalid ObjectId)
  if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Resource not found or invalid format';
  }

  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = Object.values(err.errors).map(val => val.message).join(', ');
  }

  return res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export default errorHandler;
