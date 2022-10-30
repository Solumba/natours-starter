const app = require('./app');

//Start Server
const port = 3000;
app.listen(port, () => console.log(`App running at http://127.0.0.1:${port}`));
