const express = require('express');
const tasksRouter = require('./routes/tasks');
const boardsRouter = require('./routes/boards');
const usersRouter = require('./routes/users');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', usersRouter);
app.use('/boards', boardsRouter);
app.use('/tasks', tasksRouter);

app.listen(PORT, () => console.log(`Server has been started. Port: ${PORT}`));
