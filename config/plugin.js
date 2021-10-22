'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  session: {
    enable: true,
    package: 'egg-session'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  swaggerdoc:{
    enable:true,
    package:'egg-swagger-doc'
  }
};

