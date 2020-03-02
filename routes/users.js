var express = require('express');
var userController = require('../controllers/users');
var router = express.Router();
/* Post user */
router.post('/', function (req, res, next) {
    console.log("entro a route");

    userController.user_create(req, res, next);
});
module.exports = router;
