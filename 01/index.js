const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];

const indexLivro = livros.findIndex((nome) => {
    return nome === 'Dom Quixote';
})

console.log(`O livro está na posição ${indexLivro}`);