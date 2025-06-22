import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.use(cors());

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      name: "JavaScript Joke",
      content:
        "Why did the developer go broke? Because he used up all his cache.",
    },
    {
      id: 2,
      name: "React Joke",
      content:
        "Why did the React component get promoted? Because it kept getting props!",
    },
    {
      id: 3,
      name: "Backend Joke",
      content:
        "Why did the API break up with the frontend? It was tired of being called all the time.",
    },
    {
      id: 4,
      name: "Debugging Joke",
      content:
        "I would love to change the world, but they won’t give me the source code.",
    },
    {
      id: 5,
      name: "Programmer Joke",
      content: "Real programmers count from 0.",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
