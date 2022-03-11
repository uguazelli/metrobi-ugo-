let strArray = [0, 4, 3, 2, 7, 8, 2, 3, 1, 9, 9];
console.log("Array:", strArray);

// Filter solution
let filterDuplicated = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);
console.log("Filer solution:", filterDuplicated(strArray));

// Sorting solution
let sorted = strArray.sort();
let fromSorted = (arr) => {
	let duplicates = [];
	let previous = null;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === previous) {
			duplicates.push(arr[i]);
		}
		previous = arr[i];
	}
	return duplicates;
};
console.log("Sorting Solution", fromSorted(sorted));

// Faster solution
// duplicates in O(n)
const faster = (arr) => {
	let arr_size = arr.length;
	let result = [];
	// count the frequency
	for (let i = 0; i < arr_size; i++) {
		arr[arr[i] % arr_size] = arr[arr[i] % arr_size] + arr_size;
	}
	for (let i = 0; i < arr_size; i++) {
		if (arr[i] >= arr_size * 2) {
			result.push(i);
		}
	}
	return result;
};
console.log("faster:", faster(strArray));

// Bonus Making use of datastructure
let setSolution = [...new Set(strArray)];
console.log("Set Solution", setSolution);
