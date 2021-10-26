const random = require('./random');

function Insercion() {
  var numeros = [];
  for (let i = 0; i <= 15; i++) {
    let aleatorio = random(1, 5, 2);
    //console.log(aleatorio);
    numeros.push(aleatorio);
  }
  var n, j, temp;
  n = numeros.length;
  console.log('Números antes de ordenar: ');
  console.log(numeros); // Mostramos, por consola,numeros desordenados
  // Algoritmo de Insercion
  for (let i = 1; i < n; i++) {
    j = i;
    temp = numeros[i];
    while (j > 0 && numeros[j - 1] > temp) {
      numeros[j] = numeros[j - 1];
      j--;
    }
    numeros[j] = temp;
  }
  console.log('Números después de ordenar: ');
  console.log(numeros); // Mostramos, por consola, numeros ordenados
}

module.exports = Insercion;
