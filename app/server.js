const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"/json"})
    if (req.url == "/json") {
        res.end(JSON.stringify([{ "code": 1, "list": [{ title: "ss" }] }]))
    } else if (req.url == "/txt") {
        res.end("text")
    } else if (req.url == "/jpg") {
        let img = fs.readFileSync("./1.jpg")
        res.end(img)
    } else {
        res.end("没有接口了")
    }
})

server.listen(3000, () => {
    console.log("服务启动成功")
})

