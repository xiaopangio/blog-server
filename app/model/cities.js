'use strict';
module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const City = app.model.define('cities', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(8),
        provinceCode: INTEGER,
        cityCode: INTEGER,

    }, { timestamps: false, });
    return City;
};
