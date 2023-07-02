const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../auth");

//Route for Checking if Email Exists
router.post("/checkEmail", (req, res) => {
	userController
		.checkEmailExists(req.body)
		.then((resultFromController) => res.send(resultFromController));
});

//Route for Retrieving User Details
router.get("/details", auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization);
	console.log(userData);

	userController
		.getProfile({ userId: userData.id })
		.then((resultFromController) => res.send(resultFromController));
});

// Route for Retrieving all Users (Admin Only)
router.get("/all", auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization);
	const data = {
		isAdmin: userData.isAdmin,
	};
	userController
		.getAllUsers(data)
		.then((resultFromController) => res.send(resultFromController));
});

//Route for signing up/registration
router.post("/register", (req, res) => {
	userController
		.registerUser(req.body)
		.then((resultFromController) => res.send(resultFromController));
});

//Route for User logging in/authentication
router.post("/login", (req, res) => {
	userController
		.loginUser(req.body)
		.then((resultFromController) => res.send(resultFromController));
});

// Route for setting a user as admin.
router.put("/:userId/setasadmin", auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization);
	const data = {
		setUserAsAdmin: req.params.userId,
		isAdmin: userData.isAdmin,
	};
	userController
		.setAsAdmin(data)
		.then((resultFromController) => res.send(resultFromController));
});

module.exports = router;

