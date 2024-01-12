import axios from "axios";

const chatEndpoint = "https://api.openai.com/v1/completions";

export default async function handler(req, res) {
  const { message } = req.body;

  try {
    const response = await axios.post(
      chatEndpoint,
      {
        prompt: `User: ${message}\nAI:`,
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 1.0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.CHATGPT_API_KEY}`,
        },
      }
    );

    const aiReply = response.data.choices[0].text.trim();
    res.status(200).json(aiReply);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while processing the request" });
  }
}