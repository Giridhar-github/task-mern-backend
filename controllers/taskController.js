const Task = require("../models/taskModel");
const asyncHandler = require("express-async-handler");

const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({user:req.user.id});
  res.status(200).json(tasks);
});

const saveTasks = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a task.");
  }
  const task = await Task.create({ text: req.body.text, user: req.user.id });
  res.status(200).json(task);
});

const updateTasks = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("No Task found for updating.");
  }
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTask);
});

const deleteTasks = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) {
    res.status(400);
    throw new Error("No Task found for deleting.");
  }
  await Task.findByIdAndDelete(req.params.id);
  res.status(200).json({ id: req.params.id });
});

module.exports = { getTasks, saveTasks, updateTasks, deleteTasks };
