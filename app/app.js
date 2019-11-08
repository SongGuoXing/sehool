const fs = require("fs")

const child = require("child_process")


let wacth = fs.watch("./server.js")

wacth.on("change", () => {

    spawn.kill()

    spawn = child.spawn("node", ["./server"])

    spawn.stdout.on("data", (data) => {
        console.log(data.toString())
    })

    spawn.stderr.on("data", data => {
        console.log(data.toString())
    })

})


let spawn = child.spawn("node", ["./server"])

spawn.stdout.on("data", (data) => {
    console.log(data.toString())
})

spawn.stderr.on("data", data => {
    console.log(data.toString())
})