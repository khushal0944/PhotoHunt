import React from "react";
import "./Loader.css"

interface LoaderClassType {
    className ?: string
}

function Loader({className}: LoaderClassType) {
	return (
		<div className={`flex justify-center text-4xl ${className} items-center`}>
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
