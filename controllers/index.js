// const contacts = require("./contacts");

// module.exports = {
//     contacts,
// }

const {
    getAll,
    getById,
    add,
    updateById,
    updateFavorite,
    deleteById,
  } = require('./contacts');


  module.exports = {
    getAll,
    getById,
    add,
    updateById,
    updateFavorite,
    deleteById,
  };