const { findById } = require('../../dbfunctions/dbcrud')

module.exports = async (req, res) => {
    try {
        let { id } = req.params;
        let boat = await findById(parseInt(id))
        res.status(200).send( boat )

    } catch (err) {
        return res.status(500).send({'info': 'Unexpected error while getting data from db.'})
    }
}