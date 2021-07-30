import React, { useState, useEffect } from "react";
import { postData } from "../api/index";
import SignUp from "./signUp";

const Login = (props) => {
	const [fullname, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		setFullName("");
		setEmail("");
		setPassword("");
	});

	const handleSignUp = () => {
		return props.signup ? (
			<SignUp
				handleChange={function (e) {
					setFullName(e.target.value);
				}}
			/>
		) : null;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
		let user;
		if (props.signup) {
			user = await postData(
				"http://localhost:3003/signup",
				formProps
			).catch((err) => console.log(err));
		} else {
			user = await postData(
				"http://localhost:3003/login",
				formProps
			).catch((err) => console.log(err));
		}
		if (user) console.log("OK");
	};

	return (
		<div className="container section is-flex is-justify-content-space-between">
			<form
				id="loginForm"
				action="/login"
				method="post"
				onSubmit={handleSubmit}>
				<p className="title is-4">
					{props.signup ? "Sign up" : "Login"}
				</p>
				<div className="field">
					{handleSignUp()}
					<div className="control m-6">
						<input
							className="input"
							name="email"
							type="text"
							placeholder="Enter email"
							onChange={function (e) {
								setEmail(e.target.value);
							}}
							required
						/>
					</div>
					<div className="control m-6">
						<input
							className="input"
							name="password"
							type="password"
							placeholder="Enter password"
							onChange={function (e) {
								setPassword(e.target.value);
							}}
							required
						/>
					</div>
					<div className="control m-6">
						<input
							type="submit"
							value="Submit"
							className="button is-primary"
						/>
					</div>
				</div>
			</form>
			<figure style={{ width: "60%", height: "60%" }}>
				<img src="login.svg" alt="" />
			</figure>
		</div>
	);
};

export default Login;
