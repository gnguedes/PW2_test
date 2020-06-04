const mysql = require('mysql')
const con = mysql.createConnection({
    host: "sql7.freemysqlhosting.net",
    user: "sql7345585",
    password: "FCdffrfHBB",
    database: "sql7345585",
})

con.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected")
    }
})


module.exports = con