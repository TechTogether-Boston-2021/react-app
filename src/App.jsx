import React, { useEffect, useState } from "react";

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
		<>
			<div>Create a message</div>
			<form onSubmit={onSubmit}>
				<button type="submit">Submit</button>
			</form>
			{data.map((item) => {
				return <div key={item.id}>{item.content}</div>;
			})}
		</>
	);
}

export default App;
