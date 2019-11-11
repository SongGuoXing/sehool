const router = require("koa-router")();
const query = require("../controller/query")

//添加
router.post("/api/put", async (ctx, next) => {
    let { title, username, sign, browse, status } = ctx.request.body
    let time = new Date().toLocaleDateString()
    let parser = [time, title, username, sign, browse, status]
    let sql = "insert into ykfx (time,title,username,sign,browse,status) values (?,?,?,?,?,?)"
    await query(sql, parser)

    ctx.body = {
        code: 1,
        msg: "添加成功"
    }
    next()
})


//删除
router.get("/api/del", async (ctx, next) => {
    let { id } = ctx.query
    let sql = `delete from ykfx where id='${id}'`
    await query(sql)
    ctx.body = {
        code: 1,
        msg: "删除成功"
    }
})


// 更新
router.post("/api/update", async (ctx, next) => {
    let { title, username, sign, browse, status, id } = ctx.request.body
    let time = new Date().toLocaleDateString()
    let parser = [time, title, username, sign, browse, status, id];
    let sql = "update ykfx set ykfx.time=?, ykfx.title=?, ykfx.username=?, ykfx.sign=?, ykfx.browse=?, ykfx.status=? where id=?";
    await query(sql, parser)
    ctx.body = {
        code: 1,
        msg: "修改成功"
    }

})


//测试查询
router.get("/api/user", (ctx, next) => {
    ctx.body = {
        code: 1,
        data: [{ name: "李华" }]
    }
    next()

})

module.exports = router