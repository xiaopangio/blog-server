'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('usersinfos', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user_id: INTEGER,//对应users表中的id
      _name: STRING(10),//用户昵称
      _avatar: STRING,//用户的头像
      _mobile: {
        type: STRING,
        unique: true//唯一的
      },//用户的电话号码  
      province_id: INTEGER,//省id
      city_id: INTEGER,//市id
      area_id: INTEGER,//地区id
      role_id: {
        type: INTEGER,
        defaultValue: 2//关联后面的权限表
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usersinfos');
  }
};