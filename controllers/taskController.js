const Task = require("../models/Task");


// Create

exports.createTask = async (req, res) => {
    const task = await Task.create({
        ...req.body,
        user: req.user
    });
    res.status(201).json(task);
};

// GET ALL
exports.getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user })
    res.json(tasks);
}

// Update
exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        { _id: req.params.id , user: req.user },
        req.body,
        {new: true}
    );
    if (!task)
    return res.status(404).json({ message: "Task not found" });
    res.json(task)
}

// Delete

exports.deleteTask = async (req, res) => {
     const task = await Task.findOneAndDelete({
        _id: req.params.id,
        user: req.user,
    });

  if (!task)
    return res.status(404).json({ message: "Task not found" });

    res.json({ message: "Task deleted" });
}


exports.getTasks = async (req, res) => {
    const { search } = req.params;

    const query = {
        user: req.user,
    }

    if(search) {
        query.title = {$regex: search, $options: "i"}
    }

    const tasks = await Task.find(query);

    res.json(tasks);
}