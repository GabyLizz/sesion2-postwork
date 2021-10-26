const random = require('./random');

function Burbuja() {
  var numeros = [];
  for (let i = 0; i <= 15; i++) {
    let aleatorio = random(1, 5, 2);
    //console.log(aleatorio);
    numeros.push(aleatorio);
  }
  var n, i, k, aux;
  n = numeros.length;
  console.log('Números antes de ordenar: ');
  console.log(numeros); // Mostramos, por consola, la numeros desordenada
  // Algoritmo de burbuja
  for (k = 1; k < n; k++) {
    for (i = 0; i < n - k; i++) {
      if (numeros[i] > numeros[i + 1]) {
        aux = numeros[i];
        numeros[i] = numeros[i + 1];
        numeros[i + 1] = aux;
      }
    }
  }
  console.log('Números después de ordenar: ');
  console.log(numeros); // Mostramos, por consola, la numeros ya ordenada
}
module.exports = Burbuja;
