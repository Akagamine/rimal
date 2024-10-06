const express = require("express");
const app = express();
const port = 2024;
const { MongoClient } = require("mongodb");
// const cors = require('cors')
// app.use(cors({ origin: 'http://localhost:8081'}));

const UrlDB =
  "mongodb+srv://akagami:akagami@rimal.wdcm2.mongodb.net//rimal";
const client = new MongoClient(UrlDB);

app.listen(port, () => {
  console.log(`rimal Server is running at http://localhost:${port}`);
 
});
client
  .connect()
  .then(() => {
    console.log("connected to rimal service Db a mongoDB Server");
  })