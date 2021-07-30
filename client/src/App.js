import React from "react";
import "./styles.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Routes from "./components/routes";

const App = () => {
	document.title = "Tradestack";
	return (
		<Router>
			<Navbar />
			<Routes />
		</Router>
	);
};

export default App;
