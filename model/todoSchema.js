const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please name this todo!"],
  },
  priority: {
    type: String,
    enum: {
      values: ["none", "low", "medium", "high"],
    },
    default: "none",
  },
  isDone: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
