const binarySearch = (array, target) => {
	let start = 1;
	let end = array.length - 1;
	let loops = 0;

	while (start <= end) {
		loops++;
		let middle = Math.floor((start + end) / 2);
		if (target === array[middle]) return [true, loops, middle];
		if (target > array[middle]) start = middle + 1;
		if (target < array[middle]) return [false, loops, start, middle];
	}
};

const bruteForce = (arr, n) => {
	let loops = 0;

	for (let i = 0; i < arr.length; i++) {
		loops++;
		if (arr[i] === n) return [arr[i], loops];
	}
	return -1;
};

const findHighest = (arr, floor) => {
	let firstEgg = binarySearch(arr, floor);

	console.log(firstEgg[1], " loops in binary search");

	if (firstEgg[0] === true) {
		console.log("the highest floor was found in binary search" + (firstEgg[2] - 1));
	} else {
		let start = firstEgg[2];
		let end = firstEgg[3];
		let secondArray = [];
		for (let i = start; i <= end; i++) {
			secondArray.push(i);
		}

		let secondEgg = bruteForce(secondArray, floor);
		console.log(secondEgg[1], " loops in binary search");
		console.log("the highest floor was found in brute force: ", secondEgg[0] - 1);
	}
};

//Create array
let arr = [];
for (let i = 0; i <= 100; i++) arr.push(i);

// pass array and highest floor
findHighest(arr, 98);
