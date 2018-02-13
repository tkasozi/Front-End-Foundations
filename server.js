const express = require('express');
//    \"lite-server -c bs-config.json\"
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/about', (req, res) => {
  res.send({ express: 'ABout page now serving.. Terminal Z' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));