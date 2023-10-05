const dashboardController = require('../controller/dashboard/dashboardController');
const PinController = require('../controller/pin/PinController');
const upload = require('../middleware/multer');
const isAuthorized = require('../middleware/isAuthorized');
const categoryController = require('../controller/category/categoryController');

module.exports = function (app) {
  app.get(`/dashboard`, isAuthorized, dashboardController.index);
  app.get(`/create/pin`, isAuthorized, PinController.index);
  app.post(
    `/store/pin`,
    isAuthorized,
    upload.single('pinExcel'),
    PinController.storePin
  );

  app.get(`/view/pin`, isAuthorized, PinController.viewPin);

  app.get(`/create/category`, isAuthorized, categoryController.createCategory);
  app.post(`/store/category`, isAuthorized, categoryController.storeCategory);

  app.get(`/view/category`, isAuthorized, categoryController.viewCategory);

  app.post(
    `/store/sub-category`,
    isAuthorized,
    categoryController.storeSubCategory
  );

  app.get(
    `/view/sub-category`,
    isAuthorized,
    categoryController.viewSubCategory
  );
};
