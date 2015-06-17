var express = require('express'),
    cors = require('cors'),
    cons = require('consolidate'),
    compress = require('compression')();
    app = express();



app.engine('html', cons.ejs);
app.set('view engine', 'html');
app.set('views', __dirname);

app.use(compress);
app.use(cors({methods: ['GET', 'POST', 'PUT', 'DELETE']}));

app.get('/', function (req, res) {
  res.render('index', {env: process.env.NODE_ENV});
});

app.use(express.static('./'));

app.listen(process.env.PORT || process.env.port || 3000, function () {
    console.log("Server stared...");
});
