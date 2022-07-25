const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const podcastRoute = require("./routes/podcast-app-route");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api", podcastRoute.routes);

const server = http.createServer(app);

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer(function (req, res) {
//   let img = __dirname + "/audios/001.mp3";

//   fs.access(img, fs.constants.F_OK, (err) => {
//     //check that we can access  the file
//     console.log(`${img} ${err ? "does not exist" : "exists"}`);
//   });

//   fs.readFile(img, function (err, content) {
//     if (err) {
//       res.writeHead(404, { "Content-type": "text/html" });
//       res.end("<h1>No such image</h1>");
//     } else {
//       //specify the content type in the response will be an image
//       res.writeHead(200, { "Content-type": "audio/mp3" });
//       res.end(content);
//     }
//   });
// });
server.listen(1234, function () {
  console.log("Server running on port 1234");
});
