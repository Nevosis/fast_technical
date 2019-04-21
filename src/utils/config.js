const baseAppRouter = "/";

// http request config
const httpRequest = {
	serverAddress: "https://jsonplaceholder.typicode.com/",
	timeOut: 10000
};

// httpRoutes
const httpRoutes = {
	twitter: {
		getPosts: "/posts"
	}
};

export { baseAppRouter, httpRequest, httpRoutes };
