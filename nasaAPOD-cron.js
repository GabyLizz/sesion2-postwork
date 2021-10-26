const https = require('https');
const { writeFile } = require('./files.js');

function getAPOD() {
  https
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
      let data = '';

      resp.setEncoding('utf8');
      //trozos de información recibida
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // La respuesta completa ha sido recibida. Imprime el resultado
      resp.on('end', () => {
        let body = JSON.parse(data);
        console.log(body);
        console.log(' Título:', body.explanation);
        console.log('\n Explicación', body.explanation);
        console.log('\n URL:', body.url);

        return body;
      });
    })
    .on('error', (err) => {
      console.log('Error: ' + err.message);
    });
}

const createImage = async () => {
  try {
    datos = getAPOD().body;
    await writeFile(datos.title, 'img', JSON.stringify(datos.url));
    console.log('imagen guardada correctamente');
  } catch (err) {
    if (err.isTtyError) throw err;
    console.log(err);
  }
};
