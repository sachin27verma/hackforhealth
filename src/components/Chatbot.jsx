'use client'
import React, { useState } from 'react';

export default function Generate() {
  const [generatedText, setGeneratedText] = useState('');

  const handleClick = async () => {
    const url = 'https://chatgpt-42.p.rapidapi.com/conversationgpt4';
    const apiKey = '3c4c43bfbfmshe34ec537381d872p103a25jsn882ced5f44ce';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'chatgpt-42.p.rapidapi.com',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: 'hello',
          },
        ],
        system_prompt: '',
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256,
        web_access: false,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const data = JSON.parse(result)[0].result;
      console.log(data)
      setGeneratedText(`ChatGPT responded:\n\n${data}`);

      
      console.log(result.result);
      // setGeneratedText(result.result); // Update state with the generated text
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Text</button>
      <p>{generatedText}</p>
    </div>
  );
}
