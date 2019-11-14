"use strict";

const Controller = require("egg").Controller;

class ChatController extends Controller {
  //登录
  async login() {
    let { ctx, service } = this;
    let { username, password } = ctx.middle;
    let data = await service.service.login(username, password);
    if (data) {
      ctx.body = {
        code: 0,
        msg: "登录成功",
        data
      };
    } else {
      ctx.body = {
        code: 1,
        msg: "登录失败"
      };
    }
  }
  //注册
  async registry() {
    let { ctx, service } = this;
    let { username, password, age } = ctx.middle;
    let data = await service.service.login(username, password);
    if (data) {
      ctx.body = {
        code: 1,
        msg: "用户已存在"
      };
    } else {
      try {
        await service.service.registry(username, password, age);
        ctx.body = {
          code: 0,
          msg: "注册成功"
        };
      } catch (e) {
        ctx.body = {
          code: 3,
          msg: e.message
        };
      }
    }
  }
  //查询所有
  async inquire() {
    let { ctx, service } = this;
     try {
      let data=await service.service.inquire();
      ctx.body={
        code:1,
        msg:'请求成功',
        data
      }
    } catch (e) {
      ctx.body={
        code:0,
        msg:e.message
      }
    }
  }
  //模糊搜索
  async search(){
    let {ctx, service}=this;
    let {value}=ctx.middle;
    try {
      let data=await service.service.search(value);
      ctx.body={
        code:1,
        msg:'搜索成功',
        data
      }
    } catch (e) {
      ctx.body={
        code:0,
        msg:e.message
      }
    }
  }
  //修改密码
  async updates() {
    let { ctx, service } = this;
    let { id, username, password, age } = ctx.middle;
    try {
      await service.service.updates(id, username, password, age);
      ctx.body = {
        code: 0,
        msg: "修改成功"
      };
    } catch (e) {
      ctx.body = {
        code: 1,
        msg: e.message
      };
    }
  }
}

module.exports = ChatController;
