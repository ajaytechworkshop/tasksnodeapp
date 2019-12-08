const express = require('express');
const router = new express.Router();
const Task = require ('../model/Task');

//Add Tasks
router.post('/tasks',async (req,res) => {
  const task = new Task(req.body);
  try{
    await task.save();
    console.log('Task added..',task)
    res.status(201).send(task);
  }catch(e){
    console.log('Error creating tasks',e);
    res.status(400).send(e);
  }
});

//Get all tasks
router.get('/tasks', async (req,res) => {
  try{
    const tasks = await Task.find({});
    console.log('Tasks..',tasks);
    res.send(tasks);
  }catch(e){
    console.log('Error getting tasks',e);
    res.status(400).send(e);
  }
});

//Get tasks by Id
router.get('/tasks/:id', async(req,res) => {
  const _id = req.params.id;
  try{
      const task = await (Task.findById({_id}));
      if(!task){
        return res.status(404).send();
      }
        res.status(200).send(task);
  }catch(e){
    console.log('Error while getting task details',e)
    res.status(500).send(e);
  }
});

//Update Tasks
router.patch('/tasks/:id', async (req, res) => {

  //Get key from the request body
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description','done'];
  
  // Return false if client tries to update task name and id
  const isValidatUpdate = updates.every ((update) => allowedUpdates.includes(update));
  if(!isValidatUpdate){
    return res.status(400).send({error: 'Invalid Updates..'});
  }

  try{
    const task =  await Task.findByIdAndUpdate(req.params.id,req.body,{new : true, runValidators: true});
     
    if(!task){
      return res.status(404).send();
    }
    res.status(200).send(task);
  }catch(e){
    console.log('Error update task !!',e);
    res.status(400).send(e);
  }
});

router.delete('/tasks/:id', async(req, res) => {
  try{
    const task = await Task.findByIdAndDelete(req.params.id);

    if(!task){
      res.status(404).send();
    }

    res.status(200).send(task);
  }catch(e){
    console.log('Error deleting tasks..',e);
    res.status(400).send(e);
  }
});

module.exports = router;