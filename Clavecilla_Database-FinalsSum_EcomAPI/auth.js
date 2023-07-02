const jwt = require("jsonwebtoken");
const secret = "ECommerceAPI";

/*
	JSON Web Tokens or JWT is a way of securely passing information from the server to the frontend or to other parts of server
*/

//Token Creation
module.exports.createAccessToken = (user) => {
	//When the user login, the token will be created with the user's information
	const data = {
		id: user._id,
		email: user.email,
		isAdmin: user.isAdmin,
	};

	//Generate a JSON web token using the jwt's sign method
	//Generates the token using the form data and the secret code with no additional options provided.
	return jwt.sign(data, secret, {});
};

//Token Verification
module.exports.verify = (req, res, next) => {
	let token = req.headers.authorization;

	if (typeof token !== "undefined") {
		// console.log(`${token} -- Before Slice`);

		//Syntax: string.slice(start, end)
		token = token.slice(7, token.length);

		// console.log(`${token} -- After Slice`);

		return jwt.verify(token, secret, (err, data) => {
			if (err) {
				return res.send({ auth: "failed" });
			} else {
				next();
			}
		});
	} else {
		return res.send({ auth: "failed" });
	}
};

//Token Decryption
module.exports.decode = (token) => {
	if (typeof token !== "undefined") {
		token = token.slice(7, token.length);

		return jwt.verify(token, secret, (err, data) => {
			if (err) {
				return null;
			} else {
				return jwt.decode(token, { complete: true }).payload;
			}
		});
	} else {
		return null;
	}
};
