class Stack {
	#items = [];
	push = (element) => this.#items.push(element);
	pop = () => this.#items.pop();
	isempty = () => this.#items.length === 0;
	empty = () => (this.#items.length = 0);
	size = () => this.#items.length;
}

const checkString = (arr) => {
	const stack = new Stack();
	let result = true;

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		if (["{", "[", "("].includes(current)) {
			stack.push(current);
		}
		if (["}", "]", ")"].includes(current)) {
			let value = stack.pop();
			if (value === "{" && current !== "}") {
				result = false;
				break;
			}
			if (value === "[" && current !== "]") {
				result = false;
				break;
			}
			if (value === "(" && current !== ")") {
				result = false;
				break;
			}
		}
	}

	return result;
};

let text = "{[(test here)]}";
const arr = text.split("");
let result = checkString(arr);
console.log(result);
