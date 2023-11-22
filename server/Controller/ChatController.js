const express = require("express");
const { Configuration, OpenAIApi } =require ("openai");
const dotenv = require("dotenv");
const aiRouter = express.Router();
dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.KEY,
});
const openai = new OpenAIApi(configuration);

aiRouter.get("/", (req, res) => {
  res.send("Welcome to search.ai");
});

aiRouter.post("/", async (req, res) => {
  try {
    console.log(req.body, "lets");
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body.message,
      max_tokens: 500,
    });
    res.status(200).send(response.data.choices[0].text);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports=aiRouter;