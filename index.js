const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));
app.get('/loveHome', (req, res) => res.render('loveHome'));
app.listen(PORT, () => console.log(`Server listen at port ${PORT}`));