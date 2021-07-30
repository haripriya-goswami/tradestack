const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
	{
		fullname: { type: String, required: true },
		email: {
			type: String,
			lowercase: true,
			unique: true,
			required: [true, "can't be blank"],
			match: [/\S+@\S+\.\S+/, "is invalid"],
			index: true,
		},
		contact: Number,
		password: { type: String, required: true },
		addresses: [String],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", userSchema);
