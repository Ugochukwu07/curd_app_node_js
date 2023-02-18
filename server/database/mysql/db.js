const connection = require("./connect");

const execute = ($query) => {
    connection.connect()
    connection.query($query, (err, rows, fields) => {
        if (err) throw err
        return rows
    })
    connection.end()
}

const selectAll = (table, conditions = []) => {
    $query = `SELECT * FROM ${table}`;
    if(conditions.length() <= 0){
        return execute($query)
    }else{
        conditions.forEach(key => {
            
        });
    }
}