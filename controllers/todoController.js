const Todo = require("../models/todoSchema");

const getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  try {
    res.status(200).json({
      status: "success",
      data: {
        todos,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "There is no todos!",
    });
  }
};

module.exports = {
  getAllTodos,
};
