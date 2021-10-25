'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('cities', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(8),
      province_code: INTEGER,
      city_code: INTEGER,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cities');
  }
};
