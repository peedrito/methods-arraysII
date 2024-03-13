const numbers = [10, 987, -886, 0, 12, 199, -45, -67];

const filterNumbers = numbers.filter((number) => {return number >= 0});

console.log(filterNumbers.join('-'));