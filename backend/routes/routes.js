const express = require('express');
const router = express.Router();
const userController = require('../src/user/userController');
const appoinmentController = require('../src/appoinment/appoinmentController');

router.route('/user/login').post(userController.userLoginController)
router.route('/user/getAll').get(userController.getDataConntrollerfn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/update/:id').patch(userController.updateUserController);
router.route('/user/delete/:id').delete(userController.deleteUserController);

router.route('/appoinment/getAll').get(appoinmentController.getAppoinmentfn); 
router.route('/appoinment/create').post(appoinmentController.createAppoinmentfn); 
router.route('/appoinment/delete/:id').delete(appoinmentController.removeAppoinmentfn);

module.exports = router;