import React from "react";

function NewPost({ setShowModal }) {
	return (
		<div className="px-6 py-4 text-gray-500">
			<div className="border border-grey-400 p-2 rounded-md flex">
				<div className="rounded-full bg-gray-600 overflow-hidden w-10 h-10">
					image here
				</div>
				<form className="flex-grow border border-gray-400 ml-4 mr-2 rounded-md">
					<input
						onFocus={(e) => {
							e.preventDefault();
							setShowModal(true);
						}}
						type="text"
						className="p-2 px-3 text-sm block w-full rounded-md"
						placeholder="Create a post"
					/>
				</form>
			</div>
		</div>
	);
}

export default NewPost;
