import {
	GET_DATA_FAILURE,
	GET_DATA_REQUEST,
	GET_DATA_SUCCESS,
} from "./actionTypes";

export const getRequest = () => {
	return { type: GET_DATA_REQUEST };
};
export const getSuccess = (payload) => {
	return { type: GET_DATA_SUCCESS, payload };
};

export const getFailure = () => {
	return { type: GET_DATA_FAILURE };
};
