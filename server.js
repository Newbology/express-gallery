const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const gallery = require('./routes/gallery');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/gallery', gallery);


app.engine('.hbs', exphbs({ extname: '.hbs', defaultLayout: 'main.hbs' }));
app.set('view engine', '.hbs');

app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});
