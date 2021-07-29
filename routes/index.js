var express = require("express");
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

/* GET home page. */
router.get("/", function (req, res) {
	res.status(200).json({ title: "Give & Take", data: "YES" });
});

router.get("/signup", function (req, res) {
	res.status(200).json({ title: "Sign Up", data: "YES" });
});

router.get("/login", function (req, res) {
	console.log("object");
	res.status(200).json({ title: "Log In", data: "YES" });
});

module.exports = router;