'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    //要注意 User只能第一个字母大写
    const User = app.model.define('users', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        username: {
            type: STRING(30),
            field: '_username'
        },//用户名
        password: {
            type: STRING(30),
            field: '_password'
        },//密码
        status: {
            type: INTEGER,
            field: '_status'
        },
        code: {
            type: STRING(8),
            field: '_code'
        },
        created_at: DATE,
        updated_at: DATE,
    });
    User.associate = function () {
        app.model.User.belongsTo(app.model.Userinfo, {
            targetKey: 'userId',
            foreignKey: 'id'
        })
    }
    return User;
};
