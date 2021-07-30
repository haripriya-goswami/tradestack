import React, { useState, useEffect } from "react";
import { postData } from "../api/index";
import SignUp from "./signUp";
import { Redirect } from "react-router-dom";

const Login = (props) => {
	const [loggedIn, setLoggedIn] = useState(false);
	useEffect(() => {
		document.querySelectorAll("input[type=text]").forEach((e) => {
			e.value = "";
		});
	});
	const handleSignUp = () => {
		return props.signup ? <SignUp /> : null;
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
			).catch((err) => {
				console.log(err);
				alert("Please insert valid username or password.");
			});
		}
		if (user) {
			console.log(user);
			setLoggedIn(true);
		}
	};

	return loggedIn ? (
		<Redirect to="/dashboard" />
	) : (
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
							required
						/>
					</div>
					<div className="control m-6">
						<input
							className="input"
							name="password"
							type="password"
							placeholder="Enter password"
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
