const express = require('express');
const exphbs = require('express-handlebars');
const articles = require('./routes/articles');
const products = require('./routes/products');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
