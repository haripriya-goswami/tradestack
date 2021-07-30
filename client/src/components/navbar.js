import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
		</>
	);
};

export default Navbar;
