const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));






const PORT = 3000;
app.listen(PORT, () => {
  console.log(`you are listening on port ${PORT}`);
})