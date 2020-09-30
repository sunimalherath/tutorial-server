var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//Allow all requests from all domains & localhost
app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var tutorials = [
  {
    id: "234kjw",
    title: "Objective C Tutorial",
    description:
      "In this video I'll teach most of the objective C programming language in one video. I'll also teach a great deal of the C programming language as well.",
    iframe:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/5esQqZIJ83g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: "as82w",
    title: "Swift Tutorial - Full Course for Beginners",
    description:
      "Learn how to code with Swift in this full tutorial course for beginners. Swift is a powerful and intuitive programming language for macOS, iOS, watchOS and tvOS.",
    iframe:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/comQ1-x2a1Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
];

app.get("/tutorials", function (req, res) {
  console.log("GET From SERVER");
  res.send(tutorials);
});

// app.post("/ingredients", function (req, res) {
//   var ingredient = req.body;
//   console.log(req.body);
//   ingredients.push(ingredient);
//   res.status(200).send("Successfully posted ingredient");
// });

app.listen(6069);
