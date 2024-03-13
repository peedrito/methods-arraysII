const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];
const filterUpperCase = frutas.filter((fruta) => fruta[0] === fruta[0].toUpperCase()); 

let indice = 0;

for (const print of filterUpperCase) {
  console.log(`${indice} - ${print}`);
  indice++;
}