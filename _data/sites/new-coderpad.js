module.exports = {
	name: "New CoderPad", // optional, falls back to object key
	description: "Key pages to speed test",
	skip: false,
	options: {
		frequency: 60 * 12, // 12 hours
		freshChrome: "site",
	},
	urls: [
		"https://new.coderpad.io/",
		"https://new.coderpad.io/register/",
		"https://new.coderpad.io/getting-started-interviewers/",
	]
};
