import React from "react";
import "./Loader.css"

function Loader() {
	return (
		<div className="flex justify-center text-4xl items-center">
			<div className="loader">
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__bar"></div>
				<div className="loader__ball"></div>
			</div>
		</div>
	);
}

export default Loader;
