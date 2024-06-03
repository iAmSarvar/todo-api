const getAllTodos = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: {
        todo: "All todos here!",
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
