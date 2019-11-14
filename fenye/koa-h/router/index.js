const router = require('koa-router')();

router.get('/api/add', async (ctx, next) => {
    let { banner, username, password, title } = ctx.query;

    let time = new Date().toLocaleDateString();

    let parser = [banner, username, password, title];

    let sql = `insert into list (banner, username, password, title) values (?,?,?,?)`;

    await query(sql, parser);

    ctx.body = {
        code: 1,
        msg: "添加成功"
    }
    next();

})

router.get('/api/del', async (ctx, next) => {
    let { id } = ctx.query;

    let sql = `delete from list where id='${id}'`

    await query(sql)
        ctx.body = {
            code: 1,
            msg: '删除成功 '
        }
})

router.get('/api/alter', async (ctx, next) => {
    let { banner, username, password, title, id } = ctx.query;

    let parser = [banner, username, password, title];

    let sql = `updata list set banner=?, username=?, password=?, title=? where id=?`;

    await query(sql, parser)
    ctx.body = {
        code: 1,
        msg: '修改成功'
    }
})


router.get('/fen',async ctx => {
    try {
        let {pagenum=1, limit=2} = ctx.query;
        let data = await ctx.mysql.query(`select *from list limit ${startIndex}, ${limit}`);
        ctx.body = {
            code: 1,
            data
        }
    } catch(e) {
        ctx.body = {
            code: 0,
            msg: e.message
        }
    }
})

module.exports = router