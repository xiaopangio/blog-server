'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('menus', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      _path: STRING,//路径 
      menu_name: STRING,//菜单名字
      _icon: STRING,//图标
      _pid: INTEGER,//父级id
      _redirect: STRING,//重定向
      _component: STRING,//加载组件
      role_level: {
        type: STRING,
        defaultValue: '[1, 2, 3]',//权限
      },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('menus');

  }
};
