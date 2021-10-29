'use strict';

module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const Role = app.model.define('roles', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        roleName: {
            type: STRING,
            field: 'role_name'
        },
        roleValue: {
            type: INTEGER,
            field: 'role_value'
        }
    }, { timestamps: false, });
    return Role;
};
