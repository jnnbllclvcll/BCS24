const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: [true, "UserId is required"],
	},
	items: [],
	totalAmount: {
		type: Number,
		required: [true, "Total Amount is required"],
	},
	purchasedOn: {
		type: Date,
		default: new Date(),
	},
	status: {
		type: String,
		default: "Pending",
	},
});

module.exports = mongoose.model("Order", orderSchema);

