var express = require('express'),
    cors = require('cors'),
    app = express();

app.use(cors({methods: ['GET', 'POST', 'PUT', 'DELETE']}));
app.use(express.static('./', {
    'index': ['index.html']
}));

app.listen(process.env.port || 1234, function () {
    console.log("Server stared...");
});
