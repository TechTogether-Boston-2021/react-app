const mongoose = require("mongoose");

mongoose.connect(
	process.env.DATABASE_CONNECTION_STRING, // Retrieve connection string
	{
		// boiler plate values
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const postSchema = new mongoose.Schema({
	title: String,
	content: String,
});

const MessageModel = mongoose.model("message", messageSchema);

module.exports = async function (context, req) {
	context.res = {
		header: {
			"Content-Type": "application/json",
		},
	};

	switch (req.method) {
		// If get, return all tasks
		case "GET":
			await getMessages(context);
			break;
		// If post, create new task
		case "POST":
			await createMessage(context);
			break;
		// If put, update task
		default:
			break;
	}
};

async function getMessages(context) {
	// load all tasks from database
	const messages = await MessageModel.find();
	console.log("These are message", messages);
	// return all tasks
	context.res.body = { messages: messages };
}

async function createMessage(context) {
	// Read the uploaded task
	const body = context.req.body;
	// Save to database
	const message = await MessageModel.create(body);
	// Set the HTTP status to created
	context.res.status = 201;
	// return new object
	context.res.body = message;
}
