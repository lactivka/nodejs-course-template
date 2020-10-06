const router = require('express').Router();
let users = require('../db/users');
let tasks = require('../db/tasks');
const { v4: getId } = require('uuid');
const { sendIfExist } = require('../helpers');

router
  .route('/')
  .get((req, res) => res.status(200).json(users))
  .post((req, res) => {
    const nextUser = { id: getId(), ...req.body };

    users.push(nextUser);
    res.status(200).json(nextUser);
  });

router
  .route('/:id')
  .get((req, res) => {
    const data = users.find(user => user.id === req.params.id);

    sendIfExist(res, data, 'User');
  })
  .put((req, res) => {
    let nextUser = null;

    users = users.map(user => {
      if (user.id === Number(req.params.id)) {
        nextUser = { ...user, ...req.body };

        return nextUser;
      }

      return user;
    });

    sendIfExist(res, nextUser, 'User');
  })
  .delete((req, res) => {
    users = users.filter(user => user.id !== req.params.id);

    tasks = tasks.filter(task =>
      task.id === Number(req.params.id) ? (task.id = null) : task.id
    );

    res.status(200).end();
  });

module.exports = router;
