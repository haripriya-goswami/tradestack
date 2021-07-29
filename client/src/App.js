import React, { useState } from "react";
import "./assets/stylesheets/styles.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
	const [docTitle, setDocTitle] = useState("React");

	document.title = docTitle;

	return (
		<>
			<Navbar />
			<Footer />
		</>
	);
};

export default App;
