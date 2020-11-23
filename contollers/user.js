const mongoose = require('mongoose');
const User = require('../models/user');

const AuthUser = async (req, res) => {
  try {
    await User.find({
      email: req.body.email,
      password: req.body.password,
    }).then((data) => {
      res.send({ msg: 'Success', data });
    });
  } catch (err) {
    res.status(403).send({ msg: 'Unsuccessful', err });
  }
};

const addUser = async (req, res) => {
  try {
    await User.find({ email: req.body.email }).then(async (data) => {
      if (!data) {
        return res
          .status(403)
          .send({ msg: 'Unsuccessful', err: 'Email Exists' });
      } else {
        await User.create(req.body).then((data) => {
          res.send({ msg: 'Success', data });
        });
      }
    });
  } catch (err) {
    res.status(403).send({ msg: 'Unsuccessful', err });
  }
};

// const updateUser = async (req, res) => {
//   try {
//     await User.findByIdAndUpdate({ _id: req.body._id }, req.body).then(
//       (data) => {
//         res.send({ msg: 'Success', data });
//       }
//     );
//   } catch (err) {
//     res.status(403).send({ msg: 'Unsuccessful', err });
//   }
// };

const delUser = async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.body._id }).then((data) => {
      res.send({ msg: 'Success', data });
    });
  } catch (err) {
    res.status(403).send({ msg: 'Unsuccessful', err });
  }
};

module.exports = { AuthUser, delUser, addUser };
