const Product = require("../models/Product");

//Adding a product
module.exports.addProduct = (reqBody) => {
	let newProduct = new Product({
		name: reqBody.name,
		category: reqBody.category,
		description: reqBody.description,
		price: reqBody.price,
	});

	return newProduct.save().then((product, error) => {
		if (error) {
			return false;
		} else {
			return true;
		}
	});
};

//Retrieving all products
module.exports.getAllProducts = () => {
	return Product.find({}).then((result) => {
		return result;
	});
};

//Retrieve All Active products
module.exports.getAllActive = () => {
	return Product.find({ isActive: true }).then((result) => {
		return result;
	});
};

//Retrieve a specific product
module.exports.getProduct = (reqParams) => {
	return Product.findById(reqParams.productId).then((result) => {
		return result;
	});
};

//Update a product
module.exports.updateProduct = (data) => {
	// console.log(data);

	return Product.findById(data.productId).then((result, error) => {
		console.log(result);

		const name = result.name;
		const description = result.description;
		const price = result.price;
		const category = result.category;

		if (data.isAdmin) {
			if (typeof data.updatedProduct.name == "undefined") {
				result.name = name;
			} else {
				result.name = data.updatedProduct.name;
			}
			if (typeof data.updatedProduct.description == "undefined") {
				result.description = description;
			} else {
				result.description = data.updatedProduct.description;
			}
			if (typeof data.updatedProduct.price == "undefined") {
				result.price = price;
			} else {
				result.price = data.updatedProduct.price;
			}
			if (typeof data.updatedProduct.category == "undefined") {
				result.category = category;
			} else {
				result.category = data.updatedProduct.category;
			}

			return result.save().then((updatedProduct, error) => {
				if (error) {
					return false;
				} else {
					return updatedProduct;
				}
			});
		} else {
			return "Unauthorized";
		}
	});
};

//Archive a Product
module.exports.archiveProduct = (data) => {
	// console.log(data);

	return Product.findById(data.productId).then((result, error) => {
		// console.log(result);

		if (data.isAdmin) {
			result.isActive = false;
			// console.log(result);

			return result.save().then((archivedProduct, error) => {
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

//Unarchive a Product
module.exports.unarchiveProduct = (data) => {
	// console.log(data);

	return Product.findById(data.productId).then((product, error) => {
		// console.log(result);

		if (data.isAdmin) {
			product.isActive = true;
			// console.log(result);

			return product.save().then((unarchivedProduct, error) => {
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

