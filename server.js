const express = require('express');
let DATA = require('./src/about.json').about; 
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.redirect('/api/about');
});

app.get('/api/:query', (req, res, next) => {
  let x = {};
  switch(req.params.query){
    case 'edu':
        x = res.json({express: DATA.edu, img: DATA.img, name: DATA.name});
        break;
    case 'summary':
        x = res.json({express: DATA.summary});
        break;
    case 'proj':
        x = res.json({express: DATA.proj});
        break;
    case 'key':
        x = res.json({express: DATA.key});        
        break;
    default:;        
  }
  res.send(JSON.stringify(x));
});

app.listen(port, () => console.log(`Listening on port ${port}`));