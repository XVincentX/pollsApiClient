var express = require('express')
  , cors = require('cors')
  , serveStatic = require('serve-static')
  , app = express();

app.use(cors());
app.use(serveStatic('./', {'index': ['index.html']}));

app.listen(1234, function(){});
