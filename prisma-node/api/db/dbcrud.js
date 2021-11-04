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
            boat: income_data,
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

/**
 * Return all boats db have.
 */
const allBoats = async () => {
    const boats = await prisma.job.findMany();

    return boats ? boats : false;
}

/**
 * Filter json object using;
 * @param {filter_param} // [brand, model, year..]
 * @param {filter_value} // mercedes, c220, 2014
 * job.filter( where: { boat: {path: ['brand'] , equals: 'mercedes'} } )
 * accepts max. 3 filter params.
 */

const filterByParam = async (filter_param, filter_value ) => {

  var query;
  if (filter_param.length == 2) { 
    query = 
    { 
      where: {
        AND: 
        [ 
            { 
              boat: { path: [filter_param[0]],equals: filter_value[0],},
            },
            
            {
              boat: { path: [filter_param[1]], string_contains: filter_value[1],},
            },
        ]
          
            }
  
    }
  } else if (filter_param.length == 3){
    query = 
    { 
      where: {
        AND: 
        [ 
            { 
              boat: { path: [filter_param[0]],equals: filter_value[0],},
            },
            
            {
              boat: { path: [filter_param[1]], string_contains: filter_value[1],},
            },

            {
              boat: { path: [filter_param[2]], string_contains: filter_value[2],},
            },
        ]
          
            }
  
    }

  } else {

    query = { 
      where: {
        boat: { path: [ filter_param[0] ], equals: filter_value[0] }
      }
    }

  }
    
  const getBoats = await prisma.job.findMany(query);

    
  return getBoats;

}

const deleteById = async (id) => {
  await prisma.job.delete({
    where: {
      id: id
    }
  });

  return {"msg":"Record deleted."}
}



module.exports = {
    saveToDB,
    findById,
    allBoats,
    filterByParam,
    deleteById
}
