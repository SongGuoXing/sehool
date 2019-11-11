const connect = require("./index")

function query(sql, parser=[]) {
    return new Promise((resolve, reject) => {
        connect.query(sql, parser, (error, data) => {
            if (error) {
                reject({
                    msg: error,
                    code: 0
                })
            } else {
                resolve({
                    code: 1,
                    data
                })
            }

        })
    })

}

module.exports = query