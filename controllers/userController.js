const fs = require('fs');

//turns json data to standard object
const usersData = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      usersData,
    },
  });
};

exports.getUser = (req, res) => {
  const id = req.params.id * 1;
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};

exports.addNewUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined',
  });
};
