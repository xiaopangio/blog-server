'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('areas', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(8),
      city_code: INTEGER,
      area_code: INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('areas');
  }
};
