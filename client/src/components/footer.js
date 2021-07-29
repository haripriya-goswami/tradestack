import React from "react";

const Footer = () => {
	return (
		<footer
			className="footer"
			style={{ position: "fixed", bottom: "0", left: "0", right: "0" }}>
			<div className="content has-text-centered">
				<p>
					&#169;<strong>Tradestack</strong> by{" "}
					<a href="http://github.com/ir4h">
						<strong>Haripriya</strong>
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
