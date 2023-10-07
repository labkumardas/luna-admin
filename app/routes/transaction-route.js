//
//
const transactionController = require('../controller/transaction/transactionController');

const isAuthorized = require('../middleware/isAuthorized');
const upload = require('../middleware/multer');
module.exports = function (app) {
  app.get(`/transaction/list`, isAuthorized, transactionController.index);
};
