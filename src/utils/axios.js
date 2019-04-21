import axios from "axios";
import { httpRequest } from "./config";

// Generic axiosInstance
const axiosInstance = axios.create({
	baseURL: httpRequest.serverAddress,
	timeout: httpRequest.timeOut,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json"
	}
});

const resolvePromise = (promise, resolve, reject) => {
	promise
		.then(function(res) {
			resolve(res.data);
		})
		.catch(function(err) {
			reject(err);
		});
};

export {
	axiosInstance,
	resolvePromise,
};
