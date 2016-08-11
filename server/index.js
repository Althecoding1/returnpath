const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

var router = express.Router();
router.get('/', function(req, res) {
  res.json({ message: 'Connected!!'});
});

app.use('/api', router);

app.listen(port);
console.log('Connected on port 3000!');
