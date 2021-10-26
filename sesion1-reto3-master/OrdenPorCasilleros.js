const random = require('./random');

function Casilleros() {
  var numeros = [];
  var casillero1 = [];
  var casillero2 = [];
  var casillero3 = [];

  for (let i = 0; i <= 15; i++) {
    let aleatorio = random(1, 35, 0);
    //console.log(aleatorio);
    numeros.push(aleatorio);
  }

  var n, k, c1, c2, c3, i, aux;

  console.log('Números antes de ordenar: ' + numeros);

  n = numeros.length;
  //Se agregan los elementos a los casilleros correspondientes
  for (l = 0; l < n; l++) {
    if (numeros[l] <= 10) {
      casillero1.push(numeros[l]);
    } else if (numeros[l] > 10 && numeros[l] <= 20) {
      casillero2.push(numeros[l]);
    } else {
      casillero3.push(numeros[l]);
    }
  }

  //console.log('casillero 1:  ' + casillero1);
  //console.log('casillero 2:  ' + casillero2);
  //console.log('casillero 3:  ' + casillero3);

  //Ordenamiento del casillero 1
  c1 = casillero1.length;
  // Algoritmo de burbuja
  for (k = 1; k < c1; k++) {
    for (i = 0; i < c1 - k; i++) {
      if (casillero1[i] > casillero1[i + 1]) {
        aux = casillero1[i];
        casillero1[i] = casillero1[i + 1];
        casillero1[i + 1] = aux;
      }
    }
  }

  //Ordenamiento del casillero 2
  c2 = casillero2.length;
  // Algoritmo de burbuja
  for (k = 1; k < c2; k++) {
    for (i = 0; i < c2 - k; i++) {
      if (casillero2[i] > casillero2[i + 1]) {
        aux = casillero2[i];
        casillero2[i] = casillero2[i + 1];
        casillero2[i + 1] = aux;
      }
    }
  }

  //Ordenamiento del casillero 3
  c3 = casillero3.length;
  // Algoritmo de burbuja
  for (k = 1; k < c3; k++) {
    for (i = 0; i < c3 - k; i++) {
      if (casillero3[i] > casillero3[i + 1]) {
        aux = casillero3[i];
        casillero3[i] = casillero3[i + 1];
        casillero3[i + 1] = aux;
      }
    }
  }

  console.log(
    `Números antes de ordenar: ${casillero1},${casillero2},${casillero3}`
  );
}

module.exports = Casilleros;
