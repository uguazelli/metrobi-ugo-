const getMaxValue = (carrotTypes, capacity) => {
	let result = [];
	for (let i = 0; i < carrotTypes.length; i++) {
		let price = carrotTypes[i].price;
		let kg = carrotTypes[i].kg;
		let priceKg = price / kg;
		let maxValue = priceKg * capacity;
		let r = `
				A bag with a capacity of ${capacity}
				can carry a total of ${maxValue}
				of carrots that price ${price} / kg ${kg} costs ${priceKg} / kg \n`;

		result.push(r);
	}

	return result;
};

carrotTypes = [
	{ kg: 5, price: 100 },
	{ kg: 7, price: 150 },
	{ kg: 3, price: 70 },
];
capacity = 36; //kg

let result = getMaxValue(carrotTypes, capacity);
console.log(result + " is the bag max capacity");
