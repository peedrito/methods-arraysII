const address = [
    { cep: '00111222', rua: "Rua dos Artistas" },
    { cep: '00111333', rua: "Rua Augusta" },
    { cep: '00222444', rua: "Avenida Paralela" },
    { cep: '11222333', rua: "Rua Carlos Gomes" },
];

const searchCep = (cep) => {
    return address.find((address) => {
        return address.cep === cep;
    });
}

console.log(searchCep('00222444').rua);