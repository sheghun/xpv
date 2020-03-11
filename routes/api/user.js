const router = require('express').Router();
const userController = require('../../controllers/user')

/*
    Get the list of all users
 */
router.get('/', userController.getUsers)
router.get('/pay', userController.pay)

module.exports = router;
