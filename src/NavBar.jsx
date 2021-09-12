import React from "react";

function NavBar() {
	return (
		<div
			className="inline-flex items-center justify-start"
			style={{ width: 1258, height: 56 }}
		>
			<div
				className="flex space-x-28 items-center justify-end pl-16 pr-20 py-12 bg-white"
				style={{ width: 1440, height: 145.94 }}
			>
				<div className="flex space-x-2.5 items-end justify-end w-40 h-10">
					<div className="relative" style={{ width: 33, height: 34.21 }}>
						<img
							className="w-8 h-8 absolute left-0 top-0 rounded-lg"
							src="https://via.placeholder.com/31.7109375x32.78419876098633"
						/>
						<img
							className="w-8 h-9 rounded-lg"
							src="https://via.placeholder.com/33x34.209598541259766"
						/>
					</div>
					<div className="relative" style={{ width: 113.5, height: 28.08 }}>
						<div className="w-28 h-6 absolute left-0 top-0 bg-pink-900 bg-opacity-50 rounded-lg" />
						<p className="w-28 h-6 absolute left-0 top-0 text-2xl leading-7">
							Safeplace
						</p>
					</div>
				</div>
				<div
					className="flex space-x-9 items-center justify-end"
					style={{ width: 608, height: 24 }}
				>
					<p className="text-base font-bold leading-normal text-green-700">
						Home
					</p>
					<p className="text-base leading-normal text-gray-800">About Us</p>
					<p className="text-base leading-normal text-gray-800">Learn More</p>
					<p className="text-base leading-normal text-gray-800">Get Help</p>
					<p className="text-base leading-normal text-gray-800">Take Action</p>
					<p className="text-base leading-normal text-gray-800">Community</p>
				</div>
				<div className="inline-flex flex-col items-center justify-start w-32 px-4 py-2.5 bg-green-700 shadow rounded-lg">
					<p className="text-sm font-bold leading-tight text-white">
						SAFETY EXIT
					</p>
				</div>
				<div className="inline-flex flex-col items-center justify-start px-4 py-2.5 bg-blue-500 bg-opacity-0 border rounded-lg border-black">
					<p className="text-sm font-medium leading-tight">Sign in</p>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
