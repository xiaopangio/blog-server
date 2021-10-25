'use strict';
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const Province = app.model.define('provinces', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(8),
        provinceCode: INTEGER

    }, { timestamps: false, });
    return Province;
};
