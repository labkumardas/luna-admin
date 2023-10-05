const bookingController = require('../controller/booking/bookingController');
const isAuthorized = require('../middleware/isAuthorized');
const upload = require('../middleware/multer');
module.exports = function (app) {
  app.get(`/booking/list`, isAuthorized, bookingController.index);
};
