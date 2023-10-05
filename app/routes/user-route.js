//
//
const userController = require('../controller/user/userController');
const isAuthorized = require('../middleware/isAuthorized');
const upload = require('../middleware/multer');

module.exports = function (app) {
  app.get(`/user/list`, isAuthorized, userController.userList);
  app.get(`/admin/list`, isAuthorized, userController.adminList);
  app.get(`/user/create`, isAuthorized, userController.userCreate);
  app.post(
    `/store/user`,
    isAuthorized,
    upload.single('banner'),
    userController.userStore
  );
};
