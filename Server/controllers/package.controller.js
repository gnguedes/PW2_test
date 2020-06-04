const con = require("../connection")
async function getPackage(req, res) {
    const query = "select * from encomenda;"
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function addPackage(req, res) {
    const { peso, tamanho, origem, destino, valorMercadoria, idTaxa, idTipoEncomenda } = req.body
    const query = `insert into encomenda (peso, tamanho, origem, destino, valorMercadoria, idTaxa, idTipoEncomenda) values ("${peso}", "${tamanho}", "${origem}", ${destino}", "${valorMercadoria}", "${idTaxa}", "${idTipoEncomenda}")`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}

async function deletePackage(req, res) {
    const { id } = req.params
    const query = `delete from encomenda where id_encomenda = ${id}`
    con.query(query, (err, results, fields) => {
        if (err) {
            return res.send(err)
        }
        res.send(results)
    })
}



module.exports = { getPackage, addPackage, deletePackage}



