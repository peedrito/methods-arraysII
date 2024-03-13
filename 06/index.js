const citys = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

const cityWithEight = citys.filter((city) => {
    return city.length <= 8;
})

console.log(cityWithEight.join(', '));