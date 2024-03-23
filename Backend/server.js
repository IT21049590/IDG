const express = require("express");
require("dotenv").config();
const {GoogleGenerativeAI} = require('@google/generative-ai')
const genAI = new GoogleGenerativeAI('AIzaSyBISaF4oDZ_qLJSvtUAWAYW5d0I4SqTEok')
const _ = require('lodash')

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.post("/content", async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({model: 'gemini-pro'})
        const prompt = req.body.prompt
        const result = await model.generateContent(prompt)
        const response = await result.response
        const text = response.text()
        return res.status(200).json({
            success: true,
            data: text
        })
        
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
});
