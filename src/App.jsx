import React, { useEffect, useState } from "react";
import Header from "./Header";
import NewPost from "./NewPost";
import NewPostModal from "./NewPostModal";
import Post from "./Post";
import "./styles.css";

function App() {
	const [data, setData] = useState([]);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		(async function () {
			const response = await fetch(`/api/posts`);
			const json = await response.json();
			setData(json.posts.reverse());
		})();
	}, []);

	const onSubmit = async (e) => {
		setShowModal(false);
		e.preventDefault();
		setData([{ title: title, body: body }, ...data]);

		const postObject = {
			title: title,
			body: body,
		};

		const response = await fetch("/api/posts", {
			method: "POST", // POST to create new item
			body: JSON.stringify(postObject), // Add task to body
			headers: {
				"Content-Type": "application/json", // Set return type to JSON
			},
		});

		setTitle("");
		setBody("");

		const message = await response.json();
		console.log(message);
	};

	return (
		<div>
			{/* <NavBar /> */}
			<Header />
			<NewPost setShowModal={setShowModal} />
			{showModal && (
				<NewPostModal
					setTitle={setTitle}
					setBody={setBody}
					title={title}
					body={body}
					onSubmit={onSubmit}
					setShowModal={setShowModal}
				/>
			)}

			{data.map((item) => {
				return <Post title={item.title} content={item.body} />;
			})}
		</div>
	);
}

export default App;
