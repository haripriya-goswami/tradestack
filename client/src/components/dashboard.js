import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div className="tile">
			<div className="tile">
				<p className="title">Dashboard</p>
			</div>
			<div
				className="tile section is-4"
				style={{
					backgroundColor: "#eee",
					height: "100vh",
				}}>
				<div>
					<p className="title is-4">Recents</p>
					<p className="subtitle">
						Nothing in recent!
						<Link to="/add" className="ml-2">
							Add New Item
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
