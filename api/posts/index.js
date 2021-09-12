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
	body: String,
});

const PostModel = mongoose.model("post", postSchema);

module.exports = async function (context, req) {
	context.res = {
		header: {
			"Content-Type": "application/json",
		},
	};

	switch (req.method) {
		case "GET":
			await getPosts(context);
			break;
		case "POST":
			await createPost(context);
			break;
		default:
			break;
	}
};

async function getPosts(context) {
	const posts = await PostModel.find();
	context.res.body = { posts: posts };
}

async function createPost(context) {
	// Read the uploaded task
	const body = context.req.body;
	// Save to database
	const post = await PostModel.create(body);
	// Set the HTTP status to created
	context.res.status = 201;
	// return new object
	context.res.body = post;
}
