import React, { useState } from "react";
import "./styles.scss";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

const App = () => {
	const [user, setUser] = useState(localStorage.getItem("TS_USER"));
	document.title = "Tradestack";
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/login">
					<Login
						signup=""
						onUserChange={() =>
							setUser(localStorage.getItem("TS_USER"))
						}
					/>
				</Route>
				<Route path="/signup">
					<Login
						signup="1"
						onUserChange={() =>
							setUser(localStorage.getItem("TS_USER"))
						}
					/>
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route
					path="/logout"
					render={() => {
						localStorage.clear();
						setUser(localStorage.getItem("TS_USER"));
						return <Redirect to="/" />;
					}}
				/>
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
