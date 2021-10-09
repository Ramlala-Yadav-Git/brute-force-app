import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
	GET_TOPIC_SUCCESS,
	GET_TRENDING_SUCCESS,
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	GET_BLOGS_REQUEST,
	GET_BLOGS_SUCCESS,
	GET_BLOGS_FAILURE,
	GET_SINGLE_BLOG,
} from "./actionTypes";
import axios from "axios";

export const loginRequest = () => {
	return { type: LOGIN_REQUEST };
};
export const loginSuccess = (user) => {
	return { type: LOGIN_SUCCESS, payload: user };
};
export const loginFailure = (err) => {
	return { type: LOGIN_FAILURE, payload: err };
};
export const getRequest = () => {
	return { type: GET_DATA_REQUEST };
};
export const getSuccess = (blogs) => {
	return { type: GET_DATA_SUCCESS, payload: blogs };
};
export const getTopic = (topics) => {
	return { type: GET_TOPIC_SUCCESS, payload: topics };
};
export const getTrending = (trending) => {
	return { type: GET_TRENDING_SUCCESS, payload: trending };
};
export const getFailure = () => {
	return { type: GET_DATA_FAILURE };
};
export const blogsRequest = () => {
	return { type: GET_BLOGS_REQUEST };
};
export const blogsSuccess = (payload) => {
	return { type: GET_BLOGS_SUCCESS, payload };
};
export const blogsFailure = () => {
	return { type: GET_BLOGS_FAILURE };
};
export const blogsSingleSuccess = (payload) => {
	return { type: GET_SINGLE_BLOG, payload };
};

export const loginUser = (payload) => (dispatch) => {
	dispatch(loginRequest());
	const pay = {
		email: payload.email,
		imageUrl: payload.imageUrl,
		name: payload.name,
		location: payload.location,
	};
	axios
		.post("https://oldbook-brute-force.herokuapp.com/users", pay)
		.then((res) => {
			dispatch(loginSuccess(res.data));
			console.log(res.data);
		})
		.catch((err) => {
			dispatch(loginFailure(err.message));
		});
};
export const logoutUser = (payload) => (dispatch) => {
	dispatch(loginRequest());
	dispatch(loginFailure());
};
export const getBlogs = () => (dispatch) => {
	try {
		dispatch(getRequest());
		axios.get("http://localhost:2345/trending").then((res) => {
			dispatch(getTrending(res.data.trending));
		});
	} catch (e) {
		dispatch(getFailure());
	}
};
