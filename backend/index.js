import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());
import { config } from 'dotenv';
config();


import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const generationConfig = {
    stopSequences: ["red"],
    maxOutputTokens: 50000,
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
};

app.post('/gem', async (req, resp) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig });
    const { prompt } = req.body;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    resp.send(response.text());
});

app.listen(3000);