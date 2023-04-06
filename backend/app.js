const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes');

const PORT = process.env.PORT || 3000;

app.use(cors());

app.listen(PORT, function () {
  console.log('Server listening on port ' + PORT)
});
