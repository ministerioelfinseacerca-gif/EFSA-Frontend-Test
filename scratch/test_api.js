const http = require('https');

const url = 'https://bible-api.deno.dev/api/books';

http.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('STATUS:', res.statusCode);
    console.log('RESPONSE:', data);
  });
}).on('error', (err) => {
  console.error('ERROR:', err);
});
