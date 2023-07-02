const User = require("../models/User");
const bcrypt = require("bcrypt");
const auth = require("../auth");

//Check if Email exists
module.exports.checkEmailExists = (reqBody) => {
	return User.find({ email: reqBody.email }).then((result) => {
		if (result.length > 0) {
			return true;
		} else {
			return false;
		}
	});
};

//Retrieve User Details
module.exports.getProfile = (data) => {
	return User.findById(data.userId).then((result) => {
		result.password = "";

		return result;
	});
};

// Retrieve All Users (Admin Only)
module.exports.getAllUsers = (data) => {
	return User.find({}).then((users) => {
		if (data.isAdmin) {
			return users;
		} else {
			return "Unauthorized";
		}
	});
};

//User Registration
module.exports.registerUser = (reqBody) => {
	let firstChar = reqBody.firstName.slice(0, 1);
	let upperCaseFirstChar = firstChar.toUpperCase();
	let restOfName = reqBody.firstName.slice(1, reqBody.firstName.length);
	restOfName = restOfName.toLowerCase();
	let capitalizedFirstName = upperCaseFirstChar + restOfName;

	let newUser = new User({
		firstName: capitalizedFirstName,
		lastName: reqBody.lastName,
		email: reqBody.email,
		password: bcrypt.hashSync(reqBody.password, 10),
	});

	return newUser.save().then((user, error) => {
		if (error) {
			return false;
		} else {
			return true;
		}
	});
};

//User Authentication
module.exports.loginUser = (reqBody) => {
	return User.findOne({ email: reqBody.email }).then((result) => {
		if (result == null) {
			return false;
		} else {
			const isPasswordCorrect = bcrypt.compareSync(
				reqBody.password,
				result.password
			);

			if (isPasswordCorrect) {
				return { access: auth.createAccessToken(result) };
			} else {
				return false;
			}
		}
	});
};

//Set logged in user as admin
module.exports.setAsAdmin = (data) => {
	// console.log(data);

	return User.findById(data.setUserAsAdmin).then((result, error) => {
		// console.log(result);

		if (data.isAdmin) {
			result.isAdmin = true;
			// console.log(result);

			return result.save().then((updatedUser, error) => {
				if (error) {
					return false;
				} else {
					return true;
				}
			});
		} else {
			return "Unauthorized";
		}
	});
};
