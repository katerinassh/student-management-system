const axios = require('axios');

exports.home = (req, res) => {
  // make get req to api
  axios.get(`http://localhost:${process.env.APP_PORT}/api/students`)
    .then((response) => {
      res.render('./pages/index', { students: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.add = (req, res) => {
  res.render('./pages/add-student');
};

exports.update = (req, res) => {
  axios.get(`http://localhost:${process.env.APP_PORT}/api/students`, { params: { id: req.query.id } })
    .then((response) => {
      res.render('./pages/update-student', { student: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.delete = async (req, res) => {
  axios.delete(`http://localhost:${process.env.APP_PORT}/api/students`, { params: { id: req.query.id } })
    .catch((err) => {
      res.send(err);
    });
};
