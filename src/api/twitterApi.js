import { axiosInstance, resolvePromise } from "../utils/axios";
import { httpRoutes } from "../utils/config";

const twitterApi = {
	getPosts() {
		return new Promise(function(resolve, reject) {
			resolvePromise(
				axiosInstance.get(httpRoutes.twitter.getPosts),
				resolve,
				reject
			);
		});
	}
};

export default twitterApi;
