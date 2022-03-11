const printAsync = async (arr) => {
	const timer = (ms) => new Promise((res) => setTimeout(res, ms));

	for (let i = 0; i < arr.length; i++) {
		await timer(1000 * i);
		console.log(arr[i]);
	}
};

let arrValues = ["a", "b", "c", "d", "e", "f"];
printAsync(arrValues);
