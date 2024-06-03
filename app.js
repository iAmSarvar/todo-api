const express = require("express");
const todoRouter = require("./routes/todoRoutes");

const app = express();

app.use(express.json());

app.use("/api/v1/todos", todoRouter);

app.all("*", (req, res, next) => {
  const error = new Error(`Page ${req.originalUrl} not found!`);
  error.status = "fail";
  error.statusCode = 404;

  next(error);
});

app.use((error, req, res, next) => {
  error.status = error.status || "error";
  error.statusCode = error.statusCode || 500;

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
  });
});

module.exports = app;
