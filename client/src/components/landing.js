import React from "react";

const Landing = () => {
	return (
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
				</div>
				<div>
					<img src="../exchange.svg" alt="Exchange" />
					<strong className="heading is-size-3 has-text-warning">
						Exchange
					</strong>
				</div>
				<div>
					<img src="../giveaway.svg" alt="Giveaway" />
					<strong className="heading is-size-3 has-text-link">
						Giveaway
					</strong>
				</div>
			</div>
		</div>
	);
};

export default Landing;
