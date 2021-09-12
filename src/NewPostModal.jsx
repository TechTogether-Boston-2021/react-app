import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import TextArea from "./components/TextArea";

function NewPostModal({
	setShowModal,
	setTitle,
	setBody,
	onSubmit,
	title,
	body,
}) {
	return (
		<div className="w-screen h-screen fixed top-0 left-0 z-20 flex ">
			<div className="border border-grey-500 w-3/4 md:w-2/4 p-5 bg-white text-grey-900 self-center mx-auto rounded-md">
				<h1 className="text-2xl mb-5">Create a post</h1>
				<Input
					className={"w-full mb-3"}
					placeholder={"Title"}
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<TextArea
					className={"w-full mb-3"}
					placeholder={"Post text (you can use markdown)"}
					onChange={(e) => setBody(e.target.value)}
					value={body}
				/>
				<div className={"text-right"}>
					<Button
						onClick={() => setShowModal(false)}
						classNames={"px-4 py-2 mr-3"}
					>
						Cancel
					</Button>
					<Button onClick={(e) => onSubmit(e)} classNames={"px-4 py-2"}>
						POST
					</Button>
				</div>
			</div>
		</div>
	);
}

export default NewPostModal;
