'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/login', controller.index.login);//登录
  router.get('/api/registry', controller.index.registry);//注册
  router.get('/api/inquire', controller.index.inquire);//查询所有
  router.get('/api/updates', controller.index.updates);//修改密码
  router.get('/api/search', controller.index.search);//模糊搜索
};
