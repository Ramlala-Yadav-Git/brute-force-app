export const convertMin = (text) => {
	text = text.trim().split(" ");
	const time = Math.ceil(text.length / 40);
	return time;
};
