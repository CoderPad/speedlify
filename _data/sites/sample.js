module.exports = {
	name: "CoderPad", // optional, falls back to object key
	description: "Key pages to speed test",
	skip: false,
	options: {
		frequency: 60 * 23, // (in minutes), 23 hours
		freshChrome: "site",
	},
	urls: [
		"https://coderpad.io/",
		"https://coderpad.io/register",
		"https://coderpad.io/getting-started-interviewers",
	]
};
