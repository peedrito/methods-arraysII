const names = ["Maria", "João", "José", "Antonio", "Beatriz", "Camila", "amanda"];

const namesWithA = names.filter((name) => {return name[0].toUpperCase() === "A"});

console.log(namesWithA);