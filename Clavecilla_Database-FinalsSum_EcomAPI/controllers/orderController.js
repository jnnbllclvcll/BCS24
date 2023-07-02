const { prependListener } = require("../models/Order");
const Order = require("../models/Order");
const Product = require("../models/Product");
const User = require("../models/User");
const Cart = require("../models/Cart");


//Order Creation
module.exports.createOrder = async (user, reqBody) => {
	if (user.isAdmin) {
		return "Unauthorized";
	} else {
		let cartItems = [];
		cartItems = await Cart.find({ userId: user.id }).then((result) => {
			return result;
		});
		console.log(cartItems);

		let newOrder = await new Order({
			userId: user.id,
			items: cartItems,
			totalAmount: reqBody.totalAmount,
		});

		return newOrder.save().then((order, error) => {
			if (error) {
				return false;
			} else {
				return true;
			}
		});
	}
};

//Retrieve all orders
module.exports.getAllOrders = (data) => {
	return Order.find({}).then((orders) => {
		if (data.isAdmin) {
			return orders;
		} else {
			return false;
		}
	});
};

//Retrieve Authenticated User’s Orders
module.exports.getMyOrders = (data) => {
	return Order.find({ userId: data.userId }).then((order) => {
		if (data.isAdmin) {
			return false;
		} else {
			return order;
		}
	});
};
