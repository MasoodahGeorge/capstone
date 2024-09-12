function errorHandling(err, req, res, next) {
    // Log error details (you can replace this with your logging mechanism)
    console.error(err);

    // Determine status code
    const statusCode = err.status || 500;

    // Response with error details
    res.status(statusCode).json({
        status: statusCode,
        message: err.message || "An error occurred. Please try again later.",
        // Include stack trace in development mode
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
}

export { errorHandling };
