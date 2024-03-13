const numbers = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const filterNumbersPairs = numbers.filter((number) => {return number % 2 === 0});

console.log(filterNumbersPairs.join('-'));