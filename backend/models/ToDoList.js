const mongoose = require("mongoose");
const toDoListSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ToDoList", toDoListSchema);
