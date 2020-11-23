const mongoose = require('mongoose');
const task = require('../models/task');

const getTask = async (req, res) => {
  try {
    if (!req.body.userId) {
      await task.find({ deviceId: req.body.deviceId }).then((data) => {
        res.send({ msg: 'Success', data });
      });
    } else {
      await task.find({ userId: req.body.userId }).then((data) => {
        res.send({ msg: 'Success', data });
      });
    }
  } catch (err) {
    res.status(403).send({ msg: 'Unsuccessful', err });
  }
};

const addTask = async (req, res) => {
  try {
    await task.create(req.body).then((data) => {
      res.send({ msg: 'Success', data });
    });
  } catch (err) {
    res.status(403).send({ msg: 'Unsuccessful', err });
  }
};

const updateTask = async (req, res) => {
  try {
    await task
      .findByIdAndUpdate({ _id: req.body._id }, req.body)
      .then((data) => {
        res.send({ msg: 'Success', data });
      });
  } catch (err) {
    res.status(403).send({ msg: 'Unsuccessful', err });
  }
};

const delTask = async (req, res) => {
  try {
    await task.findByIdAndDelete({ _id: req.body._id }).then((data) => {
      res.send({ msg: 'Success', data });
    });
  } catch (err) {
    res.status(403).send({ msg: 'Unsuccessful', err });
  }
};

module.exports = { addTask, updateTask, delTask, getTask };
