
const saveBoat = require('./registerBoat');
const {getBoatById, deleteBoatById } = require('./idBoat');
const {returnAll, filterJs} = require('./filterBoat');
module.exports = {
    saveBoat:saveBoat,
    getBoatById:getBoatById,
    deleteBoatById:deleteBoatById,
    returnAll:returnAll,
    filterJs:filterJs
}