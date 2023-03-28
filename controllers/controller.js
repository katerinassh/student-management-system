const { findById, findAll, update, insert, remove } = require('../services/student.service');

exports.find = async (req, res) => {
  try {
    const result = req.query.id ? await findById(+req.query.id) : await findAll();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({ message: 'Can`t load students, try later' });
  }
};

exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ massage: 'Data content can`t be empty' });
  }

  const { id } = req.params;
  try {
    await update(+id, req.body);
    res.redirect('../..');
  } catch (err) {
    res.status(500).send({ message: 'Can`t update student, try later' });
  }
};

exports.insert = async (req, res) => {
  if (!req.body) {
    res.status(400).send({ massage: 'Data content can`t be empty' });
  }

  try {
    await insert(req.body);
    res.redirect('../..');
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await remove(+req.query.id);
    res.end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
