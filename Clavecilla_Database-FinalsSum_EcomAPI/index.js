const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const path = require("path");
const port = 4001;
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

mongoose.connect(
	/* "mongodb+srv://admin:admin123@zuitt-bootcamp.tmj91nt.mongodb.net/Database?retryWrites=true&w=majority" */
	"mongodb+srv://admin:1234567890@dlsud-sandbox.kk4anuj.mongodb.net/Database?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

let db = mongoose.connection;
db.on("error", () => console.error.bind(console, "Connection Error"));
db.once("open", () => console.log("Now connected to MongoDB Atlas"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/carts", cartRoutes);
app.use("/orders", orderRoutes);

app.listen(process.env.PORT || port, () => {
	console.log(`API is now online on port ${process.env.PORT || port}`);
});
