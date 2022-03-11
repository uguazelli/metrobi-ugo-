let arrValues = ["a", "b", "c", "d", "e", "f"];

// Original Solution
const printAsync = async (arr) => {
	const timer = (ms) => new Promise((res) => setTimeout(res, ms));
	for (let i = 0; i < arr.length; i++) {
		await timer(1000 * i);
		console.log(arr[i]);
	}
};

printAsync(arrValues);

// Async call
const promiseFunc = async (value, time) => {
	await new Promise((res) => setTimeout(res, time));
	console.log(value);
};

const printFunction = async (arr) => {
	for (let i = 0; i < arr.length; i++) {
		await promiseFunc(arr[i], 1000 * i);
	}
};

printFunction(arrValues);
