import React from "react";

function Post({ content }) {
	return (
		<div className="px-6 text-grey-400 mb-2">
			<div className="border border-grey-800 p-2 rounded-md">
				<h5 className="text-gray-600 text-sm mb-1">
					posted by: Jamie 5 hours ago
				</h5>
				{/* <h2 className="text-xl mb-4">My first post</h2> */}
				<div className="text-sm leading-6">
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
}

export default Post;
