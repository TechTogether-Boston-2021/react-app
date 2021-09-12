import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewPost from "./NewPost";
import "./styles.css";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		(async function () {
			const response = await fetch(`/api/messages`);
			const json = await response.json();
			setData(json.messages);
		})();
	}, []);

	const onSubmit = async () => {
		const data = {
			content: "hello world",
		};

		const response = await fetch("/api/messages", {
			method: "POST", // POST to create new item
			body: JSON.stringify(data), // Add task to body
			headers: {
				"Content-Type": "application/json", // Set return type to JSON
			},
		});

		const message = await response.json();
		console.log(message);
	};

	return (
		<div>
			<Header />
			<NewPost />
			<div className="px-6 text-grey-400">
				<div className="border border-grey-800 p-2 rounded-md">
					<h5 className="text-gray-600 text-sm mb-1">
						posted by: Jamie 5 hours ago
					</h5>
					<h2 className="text-xl mb-4">My first post</h2>
					<div className="text-sm leading-6">
						<p>Content here</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
