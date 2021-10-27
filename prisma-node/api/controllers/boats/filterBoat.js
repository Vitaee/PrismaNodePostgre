const {allBoats , filterByParam } = require('../../dbfunctions/dbcrud');

const returnAll = async (req, res) => {
    let saved_data = await allBoats();
    res.status(200).send( saved_data )
}

const filterJs = async (req, res) => {
    let params = req.body;
    console.log(params);
    res.status(200).send({'msg':'ok'})
}


module.exports = {
    returnAll,
    filterJs
}