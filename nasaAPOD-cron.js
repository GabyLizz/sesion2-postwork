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

        fs.writeFileSync(
          path.join(__dirname, '/ejemplo_1.txt'),
          'Este es el contenido de mi archivo',
          { encoding: 'utf-8' }
        );
        console.log('writeFileSync:', 'Archivo creado!');
      });
    })
    .on('error', (err) => {
      console.log('Error: ' + err.message);
    });
}
