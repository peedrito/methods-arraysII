const numbers = [0, 2, 4, 6, 2, 8, 44];

const numberPair = numbers.every((number) => {
    return number % 2 === 0;
})

console.log(numberPair ? 'array válido' : 'array inválido');