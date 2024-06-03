const express = require("express");
const todoRouter = require("./routes/todoRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.json());

//routes
app.use("/api/v1/todos", todoRouter);

// 404 pages
app.all("*", (req, res, next) => {
  next(new AppError(`Page ${req.originalUrl} not found!`, 404));
});

// global error handling middleware
app.use(globalErrorHandler);

module.exports = app;
