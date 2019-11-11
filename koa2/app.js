const koa = require("koa")
const routers = require("./router")
const bodyparser = require("koa-bodyparser")
const path = require("path")

const static = require("koa-static")

const app = new koa()

app.use(static(path.join(process.cwd(), "public")))

app.use(bodyparser())






app.use(routers.routes())
app.use(routers.allowedMethods())



app.use((ctx, next) => {
    console.log(333)
    
})



app.listen(7001, () => {
    console.log("服务已启动")
})