const { saveToDB } = require('../../dbfunctions/dbcrud')

module.exports = async (req, res) => {
    
    let saved_data = await saveToDB(req.body)
    res.status(200).send( saved_data )
}