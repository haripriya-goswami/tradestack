import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./landing";
import Login from "./login";

const Routes = () => {
	return (
		<Switch>
			<Route path="/login">
				<Login signup="" />
			</Route>
			<Route path="/signup">
				<Login signup="1" />
			</Route>
			<Route path="/">
				<Landing />
			</Route>
		</Switch>
	);
};

export default Routes;
