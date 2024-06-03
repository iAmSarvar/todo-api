const Todo = require("../model/todoSchema");
const AppError = require("../utils/appError");
const cathcAsyncErrors = require("../utils/cathcAsyncErrors");

const getAllTodos = cathcAsyncErrors(async (req, res, next) => {
  const todos = await Todo.find();

  res.status(200).json({
    status: "success",
    data: {
      todos,
    },
  });
});

const getTodo = cathcAsyncErrors(async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return next(new AppError("Todo not found!", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      todo,
    },
  });
});

const createTodo = cathcAsyncErrors(async (req, res, next) => {
  const newTodo = await Todo.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      todo: newTodo,
    },
  });
});

const updateTodo = cathcAsyncErrors(async (req, res, next) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedTodo) {
    return next(new AppError("Todo not found!", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      todo: updatedTodo,
    },
  });
});

const deleteTodo = cathcAsyncErrors(async (req, res, next) => {
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

  if (!deletedTodo) {
    return next(new AppError("Todo not found!", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

module.exports = {
  getAllTodos,
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
};
