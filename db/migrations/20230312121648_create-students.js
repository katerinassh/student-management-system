/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('students', (table) => {
      table.increments('id').primary();
      table.string('name', 255).notNullable().unique();
      table.string('faculty', 255).notNullable();
      table.string('group', 15);
      table.enum('status', ['registrated', 'studing', 'graduated']).notNullable();
      table.date('birthday').notNullable();
      table.string('email', 35).notNullable().unique();
      table.string('phone', 12).notNullable().unique();
      table.string('record_book', 35);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('students');
};
