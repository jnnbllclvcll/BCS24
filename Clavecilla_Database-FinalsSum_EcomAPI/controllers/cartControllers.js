const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const auth = require("../auth");
const req = require("express/lib/request");

// Get all items in user's cart
module.exports.getAllItemsInMyCart = async (user) => {
	if (user.isAdmin) {
		return "Unauthorized";
	} else {
		return Cart.find({ userId: user.id }).then((cart, error) => {
			if (error) {
				return false;
			} else {
				return cart;
			}
		});
	}
};

// Add item to Cart (User Only)
module.exports.addToCart = async (user, reqParams, reqBody) => {
	if (user.isAdmin) {
		return "Unauthorized";
	} else {
		let product = await Product.findById(reqParams.productId);

		let subTotal = reqBody.quantity * product.price;

		let newCart = new Cart({
			userId: user.id,
			product: [
				{
					productId: product.id,
					name: product.name,
					quantity: reqBody.quantity,
					price: product.price,
				},
			],
			subTotal: subTotal,
		});

		return newCart.save().then((cart, error) => {
			if (error) {
				return false;
			} else {
				return true;
			}
		});
	}
};

//Update Item's quantity
module.exports.updateItem = async (user, reqParams, reqBody) => {
	if (user.isAdmin) {
		return "Unauthorized";
	} else {
		let item = await Cart.findById(reqParams.cartId).then((data) => {
			return data;
		});
		// console.log(item.product[0].productId);
		// console.log(item.product[0].price);

		let subTotal = reqBody.quantity * item.product[0].price;

		let updatedItem = {
			product: [
				{
					productId: item.product[0].productId,
					name: item.product[0].name,
					quantity: reqBody.quantity,
					price: item.product[0].price,
				},
			],
			subTotal: subTotal,
		};
		return Cart.findByIdAndUpdate(reqParams.cartId, updatedItem).then(
			(updatedCartItem, error) => {
				if (error) {
					return false;
				} else {
					return true;
				}
			}
		);
	}
};

// Remove an item from the cart
module.exports.deleteItem = async (user, reqParams) => {
	if (user.isAdmin) {
		return "Unauthorized";
	} else {
		return Cart.findByIdAndRemove(reqParams.cartId).then(
			(removedItem, error) => {
				if (error) {
					return false;
				} else {
					return true;
				}
			}
		);
	}
};

// Delete all items from cart
module.exports.deleteAllItems = async (user) => {
	if (user.isAdmin) {
		return "Unauthorized";
	} else {
		return Cart.deleteMany({ userId: user.id }).then((removedItems, error) => {
			if (error) {
				return false;
			} else {
				return true;
			}
		});
	}
};

