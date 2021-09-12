import React from "react";

function Button(props) {
	let classNames =
		"border border-gray-300 rounded-full px-3 text-sm font-bold ";
	if (props.classNames) {
		classNames += props.classNames;
	}
	return <button {...props} className={classNames} />;
}

export default Button;
