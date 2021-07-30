const User = require("../models/user.model.js");

var express = require("express");
const app = express();
var router = express.Router();

// function func1(req, res, next) {
//     console.log("Time", Date.now());
//     next();
// }

// function func2(req, res, next) {
//     console.log("Express");
//     next();
// }

// router.use([func1, func2], function(req, res, next) {
//     console.log("3rd middleware");
// });

// router.get(
// 	"/:id",
// 	function (req, res, next) {
// 		if (req.params.id === "5") next("route");
// 		else next();
// 		console.log("YAY!");
// 	},
// 	function (req, res, next) {
// 		console.log(req.params.id);
// 	}
// );

// router.get("/:id", function (req, res, next) {
// 	console.log("next route");
// });
// app.set("port", 4000);

/* GET home page. */
router.get("/", function (req, res) {
	// console.log(app.get("port"));
	res.status(200).json({ title: "Tradestack", data: "YES" });
});

router.get("/signup", function (req, res) {
	res.status(200).json({ title: "Sign Up", data: "YES" });
});

router.get("/login", function (req, res) {
	console.log("object");
	res.status(200).json({ title: "Log In", data: "YES" });
});

router.post("/signup", async function (req, res) {
	console.log(req.body);
	try {
		let usr = await User.create(req.body);
		res.status(200).json(usr);
	} catch (error) {
		console.log("sign up err", error);
		res.status(400).json(error);
	}
});

router.post("/login", async function (req, res) {
	console.log(req.body);
	await User.findOne(req.body, (err, usr) => {
		if (err) console.log(err);
		usr
			? res.status(200).json("ok")
			: res.status(400).json("User Not Found");
	});
});

module.exports = router;
