import React from "react";

function Button(props) {
	const defaultClassnames =
		"border border-grey-300 rounded-full px-2 font-bold";
	return (
		<button className={defaultClassnames + props.className} {...props}></button>
	);
}

export default Button;
