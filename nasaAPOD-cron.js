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

        title = body.title;
        url = body.url;

        writeFile(title, 'img', url);
        console.log('libro registrado correctamente');
      });
    })
    .on('error', (err) => {
      console.log('Error: ' + err.message);
    });
}

getAPOD();
