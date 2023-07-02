const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartControllers");
const auth = require("../auth");

//Get all items in cart
router.get("/", auth.verify, (req, res) => {
	const user = auth.decode(req.headers.authorization);

	cartController
		.getAllItemsInMyCart(user)
		.then((resultFromController) => res.send(resultFromController));
});

// Add product to User's cart (user only)
router.post("/:productId/addToCart", auth.verify, (req, res) => {
	const user = auth.decode(req.headers.authorization);

	cartController
		.addToCart(user, req.params, req.body)
		.then((resultFromController) => res.send(resultFromController));
});

// Update item's quantity in cart
router.put("/:cartId/update", auth.verify, (req, res) => {
	const user = auth.decode(req.headers.authorization);
	cartController
		.updateItem(user, req.params, req.body)
		.then((resultFromController) => res.send(resultFromController));
});

// Remove an Item from cart
router.delete("/:cartId/delete", auth.verify, (req, res) => {
	const user = auth.decode(req.headers.authorization);

	cartController
		.deleteItem(user, req.params)
		.then((resultFromController) => res.send(resultFromController));
});

// Delete all items from cart
router.delete("/deleteAll", auth.verify, (req, res) => {
	const user = auth.decode(req.headers.authorization);

	cartController
		.deleteAllItems(user)
		.then((resultFromController) => res.send(resultFromController));
});

module.exports = router;

