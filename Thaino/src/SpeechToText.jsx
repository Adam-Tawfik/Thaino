import React, { useState, useEffect } from "react";
import './Sound.css';
function SpeechToText({ audioBlob }) {
  const [text, setText] = useState("Transcribing...");

  useEffect(() => {
    async function fetchTranscription() {
      try {
        if (!audioBlob) {
          setText("No audio to transcribe.");
          return;
        }

        const formData = new FormData();
        formData.append("file", audioBlob, "audio.mp3");
        formData.append("model", "whisper-1");

        const response = await fetch("https://api.openai.com/v1/audio/transcriptions", {
          method: "POST",
          headers: {
            Authorization: `Bearer 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`,
          },
          body: formData,
        });

        if (!response.ok) {
          const errorDetails = await response.json();
          console.error("Transcription API Error:", errorDetails);
          setText("Error transcribing audio.");
          return;
        }

        const result = await response.json();
        const transcriptionText = result.text;


        // Chat completion endpoint for GPT-4
        const summaryResponse = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4",
            messages: [
              {
                role: "system",
                content: "You are an AI that summarizes text. Please summarize the following content in a concise manner and make a list of all the important topics. Format the topics in the following catagories: Critical, Important, and Noteworthy.",
              },
              {
                role: "user",
                content: transcriptionText,
              },
            ],
            max_tokens: 1000,
            temperature: 0.7,
          }),
        });

        if (!summaryResponse.ok) {
          const errorDetails = await summaryResponse.json();
          console.error("Summary API Error:", errorDetails);
          setText("Error summarizing transcription.");
          return;
        }

        const summaryResult = await summaryResponse.json();

        // Fixed: Correctly access the message content from the chat completion response
        if (summaryResult.choices && summaryResult.choices[0] && summaryResult.choices[0].message) {
          setText(summaryResult.choices[0].message.content);
        } else {
          setText("Error: Unable to generate summary.");
        }

      } catch (error) {
        console.error("Error:", error);
        setText("Error processing audio.");
      }
    }

    fetchTranscription();
  }, [audioBlob]);

  return <p className="summary_text">{text}</p>;
}

export default SpeechToText;