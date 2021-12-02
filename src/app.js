const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const routes = require('./routes/api');

dotEnv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} on ${process.env.NODE_ENV} environment`);
});