import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem("TS_USER") ? true : false
	);
	const handleBtns = () => {
		return localStorage.getItem("TS_USER") ? (
			<div className="buttons">
				<Link
					to="/profile"
					className="button is-link is-light is-outlined">
					<i className="fas fa-user mr-1"></i>
					{localStorage.getItem("TS_USER_FN")}
				</Link>
				<Link
					to="/logout"
					onClick={() => setLoggedIn(false)}
					className="button is-primary is-light">
					<strong>Log Out</strong>
				</Link>
			</div>
		) : (
			<div className="buttons">
				<Link to="/login" className="button">
					Log in
				</Link>
				<Link to="/signup" className="button is-primary">
					<strong>Sign up</strong>
				</Link>
			</div>
		);
	};
	useEffect(() => {
		setLoggedIn(localStorage.getItem("TS_USER") ? true : false);
		handleBtns();
	}, [loggedIn]);
	return (
		<>
			<header>
				<nav
					className="navbar"
					role="navigation"
					aria-label="main navigation">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/" alt="">
							<strong className="title">
								<i className="fas fa-stream mr-1"></i>Tradestack
							</strong>
						</Link>
					</div>

					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							{/* <Link to="/" className="navbar-item">
							Home
						</Link>

						<Link to="/" className="navbar-item">
							Documentation
						</Link> */}
						</div>
						<div className="navbar-end">
							<div id="btns" className="navbar-item">
								{handleBtns()}
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navbar;
