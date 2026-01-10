import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/", async (req, res) => {
  try {
    const response = await axios.get(`https://v2.jokeapi.dev/joke/Programming?type=${req.body.type}`);
    res.render("index.ejs", {joke: response.data})
  } catch (error) {
    console.error("Failed to make request: " + error.message);
    res.status(500).send("Failed to fetch joke. Please try again.");
  }
});
