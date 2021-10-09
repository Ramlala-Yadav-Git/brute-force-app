const arr = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec",
];
export const convertDates = (date) => {
	date = date.trim();
	let subDate = date.substr(0, 10);
	const time = date.substr(11, 16);
	subDate = subDate.split("-");
	const str =
		time.substr(0, 5) + " " + arr[Number(subDate[1]) - 1] + " " + subDate[2];
	return str;
};
// console.log(convertDates("2021-10-01T06:46:24.505Z"));
