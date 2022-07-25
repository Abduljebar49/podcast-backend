const fs = require("fs");

const getSingleSura = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  var name = "";
  if (id == null) {
    res.status(401).send({ message: "no id sent" });
  }
  if (id <= 9 && id > 0) {
    name = `00${id}`;
  } else if (id < 100 && id > 9) {
    name = `0${id}`;
  } else {
    name = `${id}`;
  }
  let img = __dirname + `/audios/${name}.mp3`;

  fs.access(img, fs.constants.F_OK, (err) => {
    // console.log(`${img} ${err ? "does not exist" : "exists"}`);
  });

  fs.readFile(img, function (err, content) {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1>No such content</h1>");
    } else {
      res.writeHead(200, { "Content-type": "audio/mp3" });
      res.end(content);
    }
  });
};

module.exports = {
  getSingleSura,
};
