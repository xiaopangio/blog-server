/* eslint valid-jsdoc: "off" */
const path = require("path")
'use strict';
const CryptoJS = require("crypto-js")
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1633510168013_5089';

  // add your middleware config here
  //添加中间件
  config.middleware = ['tokenHandler'];
  // 配置tokenHandler中间件
  config.tokenHandler = {
    match(ctx) {
      const url = ctx.request.url;
      if (url.startsWith('/admin/captcha')
        || url.startsWith('/admin/login')
        || url.startsWith('/admin/register')
        || url.startsWith('/swagger')
        || url.startsWith('/favicon')) {
        return false
      } else {
        return true
      }
    }// match匹配
    // ignore//ignore忽略
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  //配置安全要求 可以发送post等请求
  config.security = {
    csrf: {
      enable: false,
    },
  };
  //创建一个数据库 并且手动配置
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'blogserver',
    username: 'root',
    password: 'wg279749'
  };
  config.KEY = CryptoJS.enc.Utf8.parse("hjj156r478f30d3mykjk")//20位密钥
  config.IV = CryptoJS.enc.Utf8.parse("iasdnkaw8326abhuas62")
  //token 密钥
  config.jwt = {
    secret: 'asdfkjs832nas9d20  '
  }
  //swagger 配置
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'xiaobai323-blog',
      description: 'xiaobai323-blog',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: false,
    // enableValidate: true,
    routerMap: false,
    enable: true,
  }
  // 设置静态文件
  config.static = {
    prefix: '/public',
    dir: path.join(appInfo.baseDir, "app/public"),
    dynamic: true,//如果当前访问的静态资源没有缓存，就缓存
    preload: false,
    maxAge: 30000000,
    buffer: true

  }
  return {
    ...config,
    ...userConfig,
  };
};
