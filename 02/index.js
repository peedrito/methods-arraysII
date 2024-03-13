const words = ["livro", "caneta", "sol", "carro", "orelha"];

const searchWord = words.some((word) => {
    return word.length > 5;
})

console.log(searchWord ? 'Existe palavra inválida' : 'Array validado');