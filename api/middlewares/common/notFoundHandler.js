const createError = require("http-errors");

// 404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your Requested content was not found!"));
}

// errorHandler
function errorHandler(err, req, res, next) {
  res.locals.error =
    process.env.NODE_ENV === "development" ? err : { message: err.message };
  res.status(err.status || 500).json(res.locals.error);
}

module.exports = {
  notFoundHandler,
  errorHandler,
};
