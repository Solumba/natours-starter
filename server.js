const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

//Start Server
const port = 3000;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`App running at http://127.0.0.1:${port}`));
