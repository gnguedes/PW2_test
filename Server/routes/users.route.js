const con = require("../connection")
async function getUsers(req, res) {
    const query = "select * from users;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function addUser(req, res) {
    const { name, email} = req.body
    const query = `insert into encomenda (name, email, password) values ("${name}", "${email}", "${password}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

module.exports = { getUsers, addUser}