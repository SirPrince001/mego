const router = require("express").Router();
const usersController = require("../controllers/users");

router.post("/add/users", usersController.createUser);

module.exports = router;
