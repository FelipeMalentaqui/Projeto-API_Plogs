require('dotenv').config();
const app = require('./app');

// não remova a variável `API_PORT` ou o `listen` ok
const port = process.env.API_PORT || 3000;

app.listen(port, () => console.log('ouvindo porta', port));
