require('dotenv').config();
let express = require('express');
let app = express();
let path = require('path');

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use("/public", express.static(__dirname + "/public"));

/
app.get("/json", (req, res) => {
  let message = "Hello json";

  
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

module.exports = app;



























 module.exports = app;
