'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/admin/register', controller.register.index);
  router.post('/admin/login', controller.login.index);
  router.get('/admin/captcha', controller.captcha.index);
  router.resources('userInfos', '/admin/userinfo', controller.userInfo)
};
