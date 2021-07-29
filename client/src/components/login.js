import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../api/index";

const Login = (props) => {
	// useEffect(() => {
	// 	const fetch = async (url) => {
	// 		console.log(await getData(url));
	// 	};
	// 	fetch("http://localhost:3003/login");
	// }, []);

	const handleSubmit = async (e) => {
		console.log(e);
		e.preventDefault();
		console.log(await getData("http://localhost:3003/login"));
	};

	let signupClass = `control m-6 ${!props.signup && "is-hidden"}`;

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
					<div className={signupClass}>
						<input
							className="input is-warning"
							name="fullname"
							type="text"
							placeholder="Enter full name"
							required
						/>
					</div>
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
							className="button is-primary mr-3"
						/>
						<Link to="/dashboard" className="button is-link">
							Dashboard
						</Link>
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
