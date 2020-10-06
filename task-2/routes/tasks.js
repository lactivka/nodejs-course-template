const router = require('express').Router();
let tasks = require('../db/tasks');
const { v4: getId } = require('uuid');
const { sendIfExist } = require('../helpers');

router
  .route('/:boardId/tasks/')
  .get((req, res) => {
    const data = tasks.filter(task => task.boardId === req.params.boardId);

    res.status(200).json(data);
  })
  .post((req, res) => {
    const data = {
      id: getId(),
      ...req.body,
      boardId: req.params.boardId
    };

    tasks.push(data);
    res.status(200).json(data);
  });

router
  .route('/:boardId/tasks/:id')
  .get((req, res) => {
    const {
      params: { id, boardId }
    } = req;

    const data = tasks.find(task => task.id === id && task.boardId === boardId);

    res.status(200).json(data);
  })
  .put((req, res) => {
    let nextTask = null;

    tasks = tasks.map(task => {
      if (task.id === req.params.id) {
        nextTask = { ...task, ...req.body };

        return nextTask;
      }

      return task;
    });

    sendIfExist(res, nextTask, 'Task');
  })
  .delete((req, res) => {
    const {
      params: { boardId, id }
    } = req;

    tasks = tasks.filter(task => task.id !== id && task.boardId !== boardId);
    res.status(200).end();
  });

module.exports = router;
