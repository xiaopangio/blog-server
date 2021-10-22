'use strict';
// 这里的model有个bug
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    //要注意 User只能第一个字母大写
    const Code = app.model.define('codes', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
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
    return Code;
};
