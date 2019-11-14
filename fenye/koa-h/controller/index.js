const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql',
})

connection.connect(error => {
    if (error) {
        console.log('连接数据失败')
    } else {
        console.log('连接数据成功')
    }
})