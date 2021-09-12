import React, { useState } from "react";
import logo from "./logo.png";

function Header() {
	const [hover, setHover] = useState(false);
	const [style, setStyle] = useState("");

	const handleHover = () => {
		setHover(!hover);
		if (hover) {
			setStyle("cursor: pointer");
		} else {
			setStyle("cursor: default");
		}
	};

	return (
		<div className="mx-6 relative flex w-full justify-between content-center">
			<div className="pt-2 pl-4">
				<img src={logo} />
			</div>
			<div
				onClick={() =>
					window.location.replace("https://azure.microsoft.com/en-us/")
				}
				onMouseEnter={() => handleHover()}
				style={{ style }}
				className="mt-10 mr-20"
			>
				<div className="inline-flex flex-col items-center justify-start w-32 px-4 py-2.5 bg-green-700 shadow rounded-lg">
					<p className="text-sm font-bold leading-tight text-white">
						SAFETY EXIT
					</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
