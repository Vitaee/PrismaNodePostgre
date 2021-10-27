const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


/**
 * Accepts a json data type and save it directly to db.
 * @param {income_data}
 * {
    "id": 8076218,
    "title": "2000 Jeanneau Sun Odyssey 52.2",
    "fetchTimeStamp": 1634901040075,
    "fetchDate": "Friday, October 22, 2021",
    "..." : "...",
 * }
*/

const saveToDB = async (income_data) => {

    const boat_data = await prisma.job.create({
        data: {
            boat: [ income_data ],
        }
    });

    return boat_data;


};


/**
 * Accepts a id as a parameter and search in db 
 * then return the result.
 * @param {income_id}
*/
const findById = async (income_id)  => {

    const boatData = await prisma.job.findFirst({
        where: {
          id: income_id,
        },
    });
        
    return boatData.boat ? boatData.boat[0] : false;
};




module.exports = {
    saveToDB,
    findById
}
