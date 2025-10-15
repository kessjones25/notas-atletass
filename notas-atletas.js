let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

for (let i = 0; i < atletas.length; i++) {
  let atleta = atletas[i].nome;
  let notasOriginais = atletas[i].notas;
  
  // Cria uma cópia para não alterar as notas originais
  let notasOrdenadas = [...notasOriginais].sort((a, b) => a - b);
  
  // Remove a menor e a maior nota
  let notasComputadas = notasOrdenadas.slice(1, 4);
  
  // Soma as notas computadas
  let soma = 0;
  notasComputadas.forEach(function(nota) {
    soma += nota;
  });

  // Calcula a média
  let media = soma / notasComputadas.length;

  // Exibição formatada
  console.log(`Atleta: ${atleta}`);
  console.log(`Notas Obtidas: ${notasOriginais.join(",")}`);
  console.log(`Média Válida: ${media}\n`);
}

