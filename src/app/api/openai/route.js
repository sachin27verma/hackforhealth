import axios from "axios";
import { NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.CHATGPT_API_KEY;

export default async function POST(req, res) {
  const { input } = req.body;

  try {
    const response = await (
      "https://api.openai.com/v1/chat/completions",
      {
        messages: input,
        max_tokens: 50,
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    const output =
      response.data.choices[0]?.message?.content?.trim() ||
      "Sorry, I do not understand.";
   return NextResponse.status(200).json({ output });
  } catch (error) {
    console.error(error);
   return NextResponse.status(500).json({ error: "Internal Server Error" });
  }
}
