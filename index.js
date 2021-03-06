require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const { addTask, updateTask, delTask, getTask } = require('./contollers/task');
const { AuthUser, addUser, delUser } = require('./contollers/user');

const port = process.env.PORT || '8000';

app.get('/', (req, res) => {
  res.send({ text: 'this is good!' });
});

app.post('/api/gettask', getTask);
app.post('/api/addtask', addTask);
app.post('/api/updatetask', updateTask);
app.post('/api/deltask', delTask);

app.post('/api/login', AuthUser);
app.post('/api/signup', addUser);
app.post('/api/deactive', delUser);

app.listen(port, () => {
  console.log('Server is Up');
});
