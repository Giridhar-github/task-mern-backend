const express = require("express");
const router = express.Router();
const {
  getTasks,
  saveTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getTasks);

router.post("/", protect, saveTasks);

router.put("/:id", protect, updateTasks);

router.delete("/:id", protect, deleteTasks);

module.exports = router;

//02 march 2024:- continue from page no. 118