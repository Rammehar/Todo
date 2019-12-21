const ToDoList = require("../models/ToDoList");

module.exports.getList = (req, res) => {
  ToDoList.find().exec((err, list) => {
    if (err) {
      return res.status(400).json({
        error: "Something Went wrong"
      });
    }
    res.json(list);
  });
};
module.exports.create = (req, res) => {
  const description = new ToDoList(req.body);
  description.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Error in saving"
      });
    }
    res.json({ data });
  });
};

module.exports.read = (req, res) => {
  return res.json(req.item);
};

module.exports.update = (req, res) => {
  const item = req.item;
  item.description = req.body.description;
  item.save((err, data) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        error: "error in updating"
      });
    }
    res.json(data);
  });
};

module.exports.todolistById = (req, res, next, id) => {
  ToDoList.findById(id).exec((err, item) => {
    if (err || !item) {
      res.status(400).json({
        error: "To do list not exists"
      });
    }
    req.item = item;
    next();
  });
};

module.exports.remove = (req, res) => {
  let item = req.item;
  item.remove((err, deleteItem) => {
    if (err) {
      return res.status(400).json({
        error: "Problem in Removing"
      });
    }
    res.json({
      message: "Deleted Successfully"
    });
  });
};
