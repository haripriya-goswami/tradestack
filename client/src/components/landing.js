import React from "react";
import { Redirect } from "react-router-dom";
import Footer from "./footer";

const Landing = () => {
	return localStorage.getItem("TS_USER") ? (
		<Redirect to="/dashboard" />
	) : (
		<div className="container section is-fluid">
			<p className="title is-4 m-1">Sometimes..</p>
			<p className="title has-text-primary">
				Sharing is better than Shopping!
			</p>
			<hr />
			<div className="is-flex is-justify-content-space-around">
				<div>
					<img src="../request.svg" alt="Request" />
					<strong className="heading is-size-3 has-text-primary">
						Request
					</strong>
					<p className="subtitle is-4 has-text-primary">
						for items you need..
					</p>
				</div>
				<div>
					<img src="../exchange.svg" alt="Exchange" />
					<strong className="heading is-size-3 has-text-warning">
						Exchange
					</strong>
					<p className="subtitle is-4 has-text-warning">
						inessential items with something valuable..
					</p>
				</div>
				<div>
					<img src="../giveaway.svg" alt="Giveaway" />
					<strong className="heading is-size-3 has-text-link">
						Giveaway
					</strong>
					<p className="subtitle is-4 has-text-link">
						items to someone needful..
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Landing;
