const router = require('express').Router();
let boards = require('../db/boards');
let tasks = require('../db/tasks');
const { v4: getId } = require('uuid');
const { sendIfExist } = require('../helpers');

router
  .route('/')
  .get((req, res) => res.status(200).json(boards))
  .post((req, res) => {
    const board = { id: getId(), ...req.body };

    boards.push(board);
    res.send(board);
  });

router
  .route('/:id')
  .get((req, res) => {
    const {
      params: { id }
    } = req;

    const data = boards.find(board => board.id === id);

    sendIfExist(res, data, 'Board');
  })
  .put((req, res) => {
    let nextBoard = null;
    const {
      params: { id }
    } = req;

    boards = boards.map(board => {
      if (board.id === id) {
        nextBoard = { ...board, ...req.body };

        return nextBoard;
      }

      return board;
    });

    sendIfExist(res, nextBoard, 'Board');
  })
  .delete((req, res) => {
    boards = boards.filter(board => board.id !== req.params.id);
    tasks = tasks.filter(task => task.id !== req.params.id);

    res.status(200).send('ok');
  });

module.exports = router;
