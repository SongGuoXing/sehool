const http = require('http');

const Koa = require('koa');

const app = new Koa();

const bodyparser = require('koa-bodyparser');

const static = require('koa-static');

const path = require('path');

const routers = require('./router');

app.use(bodyparser());

app.use(static(path.join(process.cwd(), "public")));

app.use(routers.routes());

app.use(routers.allowedMethods());

app.listen(9090, () => {
    console.log('服务启动成功');
})