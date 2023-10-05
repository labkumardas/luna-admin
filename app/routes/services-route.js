const isAuthorized = require('../middleware/isAuthorized');
const upload = require('../middleware/multer');
const productController = require('../controller/dashboard/productController');
//
module.exports = function (app) {
  app.get(`/create/service`, isAuthorized, productController.createService);
  app.get(`/view/service`, isAuthorized, productController.viewService);

  app.post(
    `/store/service/data`,
    isAuthorized,
    upload.single('banner'),
    productController.storeService
  );
  app.post(`/get/subcategory`, isAuthorized, productController.getSubCategory);
};
