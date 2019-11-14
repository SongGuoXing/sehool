'use strict';

const Service = require('egg').Service;

class ChatService extends Service {
  async login(username,password) {
      const results=await this.app.mysql.get('user_list',{username,password});
      return results
  }
  async registry(username,password,age) {
      const results=await this.app.mysql.insert('user_list',{username,password,age});
      return results
  }
  async inquire() {
      const results=await this.app.mysql.select('content_list');
      return results
  }
  async updates(id, username, password, age){
      const results=await this.app.mysql.update('user_list',{ id, username, password, age});
      return results
  }
  async search(value){
      const results=await this.app.mysql.query(`select * from content_list where name like '%${value}%'`);
      return results
  }
}

module.exports = ChatService;
