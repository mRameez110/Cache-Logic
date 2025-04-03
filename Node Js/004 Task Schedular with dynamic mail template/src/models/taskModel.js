const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    createdBy: {
      type: String,
      required: true,
    },
    assignedTo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
