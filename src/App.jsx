import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewPost from "./NewPost";
import Post from "./Post";
import "./styles.css";

function App() {
	const [data, setData] = useState([]);
	const [newPost, setNewPost] = useState([]);

	useEffect(() => {
		(async function () {
			const response = await fetch(`/api/messages`);
			const json = await response.json();
			setData(json.messages.reverse());
		})();
	}, []);

	const onChange = (e) => {
		setNewPost(e.target.value);
	};

	const onSubmit = async () => {
		const data = {
			content: newPost,
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
			{/* <NavBar /> */}
			<Header />
			<NewPost value={newPost} onChange={onChange} onSubmit={onSubmit} />
			{data.map((item) => {
				return <Post content={item.content} />;
			})}
		</div>
	);
}

export default App;
