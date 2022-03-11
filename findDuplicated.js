let duplicated = (arr) => arr.filter((item, index) => arr.indexOf(item) != index);

let strArray = [1, 3, 6, 7, 3, 9];

console.log(duplicated(strArray));
