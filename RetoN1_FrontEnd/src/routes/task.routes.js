const express = require('express');
const router = express.Router();

//atravez del coso task puedo hacre consulta a la base de datos
const Task = require('../models/task');

router.get('/',async (req, res) => {
    const tasks = await Task.find({})
        .catch(err => console.error(err));
    res.json(tasks);
})

router.get('/:id', async (req, res) =>{
    const task = await Task.findById(req.params.id);
    res.json(task);
})

router.post('/', async (req, res) =>{
    const {title, description} = req.body;
    const task = new Task({
        title, 
        description
    });
    await task.save();
    res.json({status: "tareas guardad"});
});

router.put('/:id', async (req, res) =>{
    const {title, description} = req.body;
    const newTask = {title, description};
    await Task.findByIdAndUpdate(req.params.id, newTask);
    //console.log(req.params.id);
    //res.json('received');
    res.json({status: 'task update'});
});

router.delete('/:id', async (req, res) =>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'task delete'});
});

module.exports = router;







