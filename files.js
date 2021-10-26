const fs = require('fs');
const path = require('path');

//@param filename filename: Nombre del archivo
//@param type Type:imagen
//@param data Contenido a alamcenar dentro del archivo
const writeFile = (filename, type, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      path.join(
        __dirname,
        '../',
        'data',
        type.tolowerCase(),
        filename,
        ',json'
      ),
      data,
      { encoding: 'utf-8' },
      (err) => {
        if (err) reject(err);
        resolve();
      }
    );
  });
};
