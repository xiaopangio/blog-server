'use strict';
module.exports = app => {
    const { STRING, INTEGER } = app.Sequelize;
    const Area = app.model.define('areas', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(8),
        cityCode: INTEGER,
        areaCode: INTEGER,

    }, { timestamps: false, });
    // Area.associate = function () {
    //     app.model.Area.belongsTo(app.model.City, {
    //         targetKey: 'cityCode',
    //         foreignKey: 'cityCode'
    //     })
    // }
    return Area;

};