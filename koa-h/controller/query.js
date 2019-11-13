const connect = require('./index');

function query(sql, parser=[]) {
    return new Promise((resolve, reject) => {
        connect.query(sql, parser, (error, data) => {
            if (error) {
                reject({
                    code: 0,
                    msg: error
                })
            } else {
                resolve({
                    code: 1,
                    msg: data
                })
            }
        })
    })
}