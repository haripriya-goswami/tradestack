import React, { useState } from "react";
import "./assets/stylesheets/styles.scss";
import Navbar from "./components/navbar";

const App = () => {
	const [docTitle, setDocTitle] = useState("React");

	document.title = docTitle;

	return (
		<>
			<Navbar />
		</>
	);
};

export default App;
