const pagesController = require('../controller/pages/pagesController');
const isAuthorized = require('../middleware/isAuthorized');
const upload = require('../middleware/multer');

module.exports = function (app) {
  app.get(`/create/banner`, isAuthorized, pagesController.createBanner);
  app.post(
    `/store/banner`,
    isAuthorized,
    upload.single('banner'),
    pagesController.storeBanner
  );

  app.get(`/view/banner`, isAuthorized, pagesController.viewBanner);
};
