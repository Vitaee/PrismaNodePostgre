const { findById, deleteById } = require('../../db/dbcrud');

const getBoatById = async (req, res) => {
    try {
        let { id } = req.params;
    
        let boat = await findById(parseInt(id))
        res.status(200).send( boat )

    } catch (err) {
        return res.status(500).send({'info': 'Unexpected error while getting data from db.'})
    }
};

const deleteBoatById = async (req, res) => {
    try {
        let { id } = req.params;

        let response = await deleteById(id);

        res.status(200).send( response )
    } catch (err) {
        return res.status(500).send({'info': 'Unexpected error while deleting data from db.'})
    }
}

module.exports = {
    getBoatById,
    deleteBoatById
}