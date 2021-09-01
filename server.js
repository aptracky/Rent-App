const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.get('/', (req, res) => {
  res.send('Hello World');  
});
// get driver connection
const dbo = require("./db/conn.js");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});