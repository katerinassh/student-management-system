/* eslint-disable no-param-reassign */
const Student = require('../models/student.model');

async function findById(id) {
  const student = await Student.query().where('id', id);
  student[0].birthday = new Date(student[0].birthday).toLocaleDateString();
  return student[0];
}

async function ifExists(email, phone) {
  const student = await Student.query().where({ email } || { phone });
  if (student[0]) return true;
  return false;
}

async function findAll() {
  const students = await Student.query();
  return students.map((student) => {
    student.birthday = new Date(student.birthday).toLocaleDateString();
    return student;
  });
}

async function update(id, body) {
  const student = await Student.query().findById(id);

  student.name = body.name;
  student.group = body.group;
  student.email = body.email;
  student.phone = body.phone;
  student.status = body.status;

  return Student.query().update(student).where('id', id);
}

async function insert(body) {
  const { name, faculty, group, email, phone, birthday, url } = body;
  if (name === '' || faculty === '' || group === '' || email === '' || phone === '')
    throw new Error('Student data is empty');
  if (await ifExists(email, phone))
    throw new Error('Student is already registrated!');

  await Student.query().insert({
    name,
    faculty,
    group,
    email,
    phone,
    birthday: new Date(birthday).toISOString(),
    status: 'registrated',
    record_book: url,
  })
}

async function remove(id) {
  await Student.query().where('id', id).del();
}

module.exports = { findById, findAll, update, insert, remove };
