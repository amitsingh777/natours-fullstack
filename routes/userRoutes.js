const express = require('express');

const {
  getUser,
  getUsers,
  createUser,
  deleteUser,
  updateUser,
} = require('../controller/users');

const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
