import React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

const App = () => {
	document.title = "Tradestack";
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/login">
					<Login signup="" />
				</Route>
				<Route path="/signup">
					<Login signup="1" />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
