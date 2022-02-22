const express = require("express");
const path = require("path");

const app = express();

let blogs = [
  {
    id: "1",
    title: "How To Build A RESTAPI With Javascript",
    avatar: "images/blog1.jpg",
    intro:
      "iste odio beatae voluptas dolor praesentium illo facere optio nobis magni, aspernatur quas.",
  },
  {
    id: "2",
    title: "How to Build an PWA application with Node.js",
    avatar: "images/blog2.jpg",
    intro:
      "iste odio beatae voluptas dolor praesentium illo facere optio nobis magni, aspernatur quas.",
  },
  {
    id: "3",
    title: "Building a Trello Clone with React DnD",
    avatar: "images/blog3.jpg",
    intro:
      "iste odio beatae voluptas dolor praesentium illo facere optio nobis magni, aspernatur quas.",
  },
];

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/blogs", (req, res) => {
  res.status(200).json({
    blogs,
  });
});

app.listen(8000, () => console.log("Server is running on Port 8000"));
