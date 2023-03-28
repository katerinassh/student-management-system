/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex('students')
    .insert([{
      name: 'Kate Shakiryanova', faculty: 'IASA', group: 'DA-91', status: 'studing', phone: '0671237613', email: 'jimash123@gmail.com', birthday: '12-10-2002', record_book: './record-books/1',
    },
    {
      name: 'Tim Frolov', faculty: 'IASA', status: 'registrated', phone: '0671237521', email: 'frolov@gmail.com', birthday: '05-02-2004',
    },
    {
      name: 'Anna Golovna', faculty: 'FIOT', group: 'FI-01', status: 'studing', phone: '0986527521', email: 'anngol@gmail.com', birthday: '10-05-2002', record_book: './record-books/2',
    }]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex('students')
    .where({ phone: '0671237613' } || { phone: '0671237521' } || { phone: '0986527521' }).del();
};
