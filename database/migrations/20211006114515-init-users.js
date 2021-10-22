'use strict';
//注册不对外开放
// 添加邀请码字段
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      _username: {
        type: STRING(30),
        unique: true
      },//用户名
      _password: STRING(30),//密码
      _status: {//启用状态
        type: INTEGER,
        defaultValue: 1//默认状态为1，即启动状态
      },
      _code: STRING(8),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};