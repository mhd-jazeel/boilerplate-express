let express = require('express');
let app = express();
let path = require('path');

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.use("/public", express.static(__dirname + "/public"));


app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});






























 module.exports = app;
