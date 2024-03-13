const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
  ];
  

console.log('a) programadores e programadoras que sejam maiores de 20 anos\n');
const programdores = pessoas.filter((pessoa) => {return pessoa.profissao === 'Programador'});
const programdoresVinte = programdores.filter((pessoa) => {return pessoa.idade > 20});
console.log(programdoresVinte);

console.log('b) jornalistas que tenha mais de 30 anos\n');
const jornalistas = pessoas.filter((pessoa) => {return pessoa.profissao === 'Jornalista'});
const jornalistasTrinta = jornalistas.filter((pessoa) => {return pessoa.idade > 30});
console.log(jornalistasTrinta);

console.log('c) jornalistas e programadores e programadoras que sejam jovens');
const programadoresJovens = programdores.filter((pessoa) => {return pessoa.idade <= 29});
const jornalistasJovens = jornalistas.filter((pessoa) => {return pessoa.idade <= 29});
console.log(jornalistasJovens, programadoresJovens);


