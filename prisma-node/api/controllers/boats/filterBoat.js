const {allBoats , filterByParam } = require('../../dbfunctions/dbcrud');

const returnAll = async (req, res) => {
    let saved_data = await allBoats();
    res.status(200).send( saved_data )
}

const filterJs = async (req, res) => {
    let query_strings = req.query;
    let arr_keys = [];
    let arr_values = []
    
    for (let data in query_strings) {
        arr_keys.push(data.toString())
        arr_values.push(query_strings[data])
    }

    

    const result = await filterByParam(arr_keys, arr_values)

    res.status(200).send( result )
}


module.exports = {
    returnAll,
    filterJs
}