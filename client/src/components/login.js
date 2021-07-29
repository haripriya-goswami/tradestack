import React, { useEffect } from "react";
import getData from "../helpers/getData";

const Login = (props) => {
	useEffect(() => {
		const fetch = async (url) => {
			console.log(await getData(url));
		};
		fetch("http://localhost:3003/login");
	}, []);

	let signupClass = `control m-6 ${!props.signup && "is-hidden"}`;

	return (
		<section className="container section is-flex is-justify-content-space-between">
			<form action="/login" method="post">
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
							className="input is-warning"
							name="email"
							type="text"
							placeholder="Enter email"
							required
						/>
					</div>
					<div className="control m-6">
						<input
							className="input is-warning"
							name="password"
							type="password"
							placeholder="Enter password"
							required
						/>
					</div>
				</div>
			</form>
			<figure style={{ width: "60%", height: "60%" }}>
				<img src="login.svg" alt="" />
			</figure>
		</section>
	);
};

export default Login;
