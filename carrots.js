const getMaxValue = (carrotTypes, capacity) => {
	let priceKG = [];
	for (let i = 0; i < carrotTypes.length; i++) {
		let price = carrotTypes[i].price;
		let kg = carrotTypes[i].kg;
		priceKG.push(price / kg);
	}

	let result = priceKG.flatMap((v, i) => priceKG.slice(i + 1).map((w) => v + w));
	for (let i = 0; i < result.length; i++) {
		priceKG.push(result[i]);
	}

	let inrange = priceKG.filter((price) => price <= capacity);
	console.log(priceKG);
	console.log(result);
	console.log(inrange);
	return Math.max(...inrange);
};

carrotTypes = [
	{ kg: 5, price: 100 },
	{ kg: 7, price: 150 },
	{ kg: 3, price: 70 },
	{ kg: 2, price: 80 },
];
capacity = 36; //kg

let result = getMaxValue(carrotTypes, capacity);
console.log(result + " is the bag max capacity");
