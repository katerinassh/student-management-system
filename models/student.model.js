const { Model } = require('objection');
const knex = require('../db/knex');

Model.knex(knex);

class Student extends Model {
  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static get tableName() {
    return 'students';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'faculty', 'group', 'phone', 'email', 'birthday'],

      properties: {
        id: { type: 'integer' },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
        name: { type: 'string' },
        faculty: { type: 'string' },
        group: { type: 'string' },
        status: {
          type: 'string',
          enum: ['registrated', 'studing', 'graduated'],
          default: 'registrated',
        },
        birthday: { type: 'string' },
        email: { type: 'string', minLength: 6, maxLength: 35 },
        phone: { type: 'string', minLength: 10, maxLength: 14 },
        record_book: { type: 'string' },
      },
    };
  }
}

module.exports = Student;
