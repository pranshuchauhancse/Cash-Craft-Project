const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

mongoose.connect('mongodb://localhost:27017/cashcraft', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
