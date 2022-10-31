import React from "react"
import './style.css'

const Loader = () => {
	return (
		<div className="gooey">
			<span className="dot"></span>
			<div className="dots">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	)
};

export default Loader;
