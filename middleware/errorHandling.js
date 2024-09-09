function errorHandling(err, req, res, next) {
    // If an error exists, send a response with the status code and error message
    if (err) {
        const statusCode = err.status || 500; // Default to 500 if no status is provided
        res.status(statusCode).json({
            status: statusCode,
            err: err.message || "An error occurred. Please try again later."
        });
    } else {
        // Pass to the next middleware if no error
        next();
    }
}

export { 
    errorHandling
};
