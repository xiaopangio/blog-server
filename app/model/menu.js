'use strict';
// 这里的model有个bug
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    //要注意 User只能第一个字母大写
    const Menu = app.model.define('menus', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        path: {
            type: STRING,
            field: '_path'
        },//路径 
        menuName: {
            type: STRING,
            field: 'menu_name'
        },//菜单名字
        icon: {
            type: STRING,
            field: '_icon'
        },//图标
        pid: {
            type: INTEGER,
            field: '_pid'
        },//父级id
        component: {
            type: STRING,
            field: '_component'
        },//加载组件
        roleLevel: {
            type: STRING,
            field: 'role_level'
        },
        redirect: {
            type: STRING,
            field: "_redirect"
        },
        created_at: DATE,
        updated_at: DATE,
    });
    return Menu;
};
