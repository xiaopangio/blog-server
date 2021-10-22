'use strict';
//注册不对外开放
// 添加邀请码字段
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('codes', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      _code: {
        type: STRING(8),
      },
      _status: {//使用状态
        type: INTEGER,
        defaultValue: 0,//默认状态为0，即未使用 1为已使用
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('codes');
  }
};