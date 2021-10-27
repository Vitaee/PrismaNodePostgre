
const saveBoat = require('./registerBoat');
const searchBoat = require('./searchBoat');
const {returnAll, filterJs} = require('./filterBoat');
module.exports = {
    saveBoat:saveBoat,
    searchBoat:searchBoat,
    returnAll:returnAll,
    filterJs:filterJs
}