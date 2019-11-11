const mysql =require("mysql")

var connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    post:"3306",
    database:"dialist"
})

connection.connect(error=>{
    if(error){
        console.log("数据连接失败")
    }else{
        console.log("数据连接成功")
    }
})

module.exports = connection