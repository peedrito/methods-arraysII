const words = ["arroz", "feijão", "carne", "vodka", "macarrão"];

const searchWord = words.some((word) => {
    return word === 'cerveja' || word === 'vodka';
})

console.log(searchWord ? 'revise sua lista, joão. possui bebida com venda proibida!' : 'tudo certo, vamos as compras!');