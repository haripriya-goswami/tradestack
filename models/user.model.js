import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: String,
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("User", userSchema);
