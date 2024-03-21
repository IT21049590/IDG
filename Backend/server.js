const express = require("express");
require("dotenv").config();
const {Cofiguration, OpenAIApi} = require('openai')
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
const openai = new Cofiguration({apiKey: process.env.OPEN_AI_KEY,})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.post("/content", async (req, res) => {
    try {
        const request = await openai.createCompletion({
            model: "gpt-3.5-turbo-0125",
            prompt: `What is IOT`,
            max_tokens: 64,
            stop:["\n"]
        })
        return
        return res.status(200).json({
            message: "Working"
        })
    } catch (error) {
        
    }
});
