const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdBy: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
