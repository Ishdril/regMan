'use strict';

const data = require('./db.json');

module.exports = {
  up: async queryInterface => {
    const instruments = data.instruments.map(instr => ({
      name: instr.name,
      max_attendants: instr.max_attendants,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return queryInterface.bulkInsert('instruments', instruments, {});
  },

  down: async () => {},
};
