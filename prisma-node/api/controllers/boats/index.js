
const saveBoat = require('./registerBoat');
const byIdBoat = require('./idBoat');
const {returnAll, filterJs} = require('./filterBoat');
module.exports = {
    saveBoat:saveBoat,
    byIdBoat:byIdBoat,
    returnAll:returnAll,
    filterJs:filterJs
}