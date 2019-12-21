const express = require("express");
const router = express.Router();

const {
  getList,
  create,
  remove,
  update,
  read,
  todolistById
} = require("../controllers/ToDoList");

router.get("/todolist/:listId", read);
router.get("/todolist", getList);
router.post("/todolist/create", create);
router.delete("/todolist/delete/:listId", remove);
router.put("/todolist/update/:listId", update);

//get item by id and store into req object as item
router.param("listId", todolistById);

module.exports = router;
