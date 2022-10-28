const express = require('express');
const {getAllUsers, addNewUser, getUser, updateUser, deleteUser} = require('./../controllers/userController');

const router = express.Router();

router.route('/').get(getAllUsers).post(addNewUser);

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
