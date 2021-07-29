import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./routes";

const Navbar = () => {
	return (
		<Router>
			<header>
				<nav
					className="navbar"
					role="navigation"
					aria-label="main navigation">
					<div className="navbar-brand">
						<Link className="navbar-item" to="/" alt="">
							<strong className="title">Tradestack</strong>
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
							<div className="navbar-item">
								<div className="buttons">
									<Link to="/login" className="button">
										Log in
									</Link>
									<Link
										to="/signup"
										className="button is-primary">
										<strong>Sign up</strong>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
			<Routes />
		</Router>
	);
};

export default Navbar;
