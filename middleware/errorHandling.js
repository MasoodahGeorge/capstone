function errorHandling(err, req, res, next) {
    if (err) {
        const statusCode = err.status || 500;
        res.status(statusCode).json({
            status: statusCode,
            err: err.message || "An error occurred. Please try again later."
        });
    } else {
        next();
    }
}

export default errorHandling;
