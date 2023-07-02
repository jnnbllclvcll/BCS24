const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const auth = require("../auth");

//Route for adding a product
router.post("/addProduct", auth.verify, (req, res) => {
	const userData = auth.decode(req.headers.authorization);

	if (userData.isAdmin) {
		productController
			.addProduct(req.body)
			.then((resultFromController) => res.send(resultFromController));
	} else {
		res.send("Unauthorized");
	}
});

//Route for retrieving all the products including inactive
router.get("/all", auth.verify, (req, res) => {
	productController
		.getAllProducts()
		.then((resultFromController) => res.send(resultFromController));
});

//Route for retrieving all the Active products
router.get("/", (req, res) => {
	productController
		.getAllActive()
		.then((resultFromController) => res.send(resultFromController));
});

//Route for retrieving a specific product
router.get("/:productId", (req, res) => {
	// console.log(req.params);

	productController
		.getProduct(req.params)
		.then((resultFromController) => res.send(resultFromController));
});

//Route for updating a product
router.put("/:productId", auth.verify, (req, res) => {
	const data = {
		productId: req.params.productId,
		isAdmin: auth.decode(req.headers.authorization).isAdmin,
		updatedProduct: req.body,
	};

	productController
		.updateProduct(data)
		.then((resultFromController) => res.send(resultFromController));

	// function sendResult (resultFromController) {
	// 	res.send(resultFromController)
	// }
});

//Archiving a product
router.put("/:productId/archive", auth.verify, (req, res) => {
	const data = {
		productId: req.params.productId,
		isAdmin: auth.decode(req.headers.authorization).isAdmin,
	};

	productController
		.archiveProduct(data)
		.then((resultFromController) => res.send(resultFromController));
});

//Unarchiving a product
router.put("/:productId/unarchive", auth.verify, (req, res) => {
	const data = {
		productId: req.params.productId,
		isAdmin: auth.decode(req.headers.authorization).isAdmin,
	};

	productController
		.unarchiveProduct(data)
		.then((resultFromController) => res.send(resultFromController));
});

module.exports = router;
