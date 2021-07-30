import React from "react";

const SignUp = (props) => {
	return (
		<div className="control m-6">
			<input
				className="input is-warning"
				name="fullname"
				type="text"
				placeholder="Enter full name"
				required
			/>
		</div>
	);
};

export default SignUp;
