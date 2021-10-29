'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Userinfo = app.model.define('usersinfos', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        userId: {
            type: INTEGER,
            field: 'user_id'
        },//对应users表中的id
        name: {
            type: STRING(10),
            field: '_name'
        },//用户昵称
        avatar: {
            type: STRING,
            field: '_avatar'
        },//用户的头像
        mobile: {
            type: STRING,
            field: '_mobile',
        },//用户的电话号码  
        provinceId: {
            type: INTEGER,
            field: 'province_id'
        },//省id
        cityId: {
            type: INTEGER,
            field: 'city_id'
        },//市id
        areaId: {
            type: INTEGER,
            field: 'area_id'
        },//地区id
        roleId: {
            type: INTEGER,
            field: 'role_id'
        },
        created_at: DATE,
        updated_at: DATE,
    });
    Userinfo.associate = function () {
        app.model.Userinfo.belongsTo(app.model.Role, {
            targetKey: 'id',
            foreignKey: 'roleId'
        })
    }
    return Userinfo;
};