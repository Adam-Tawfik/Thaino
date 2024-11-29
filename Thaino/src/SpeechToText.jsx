import fs from "fs";
import OpenAI from "openai";




async function main() {
    const openai = new OpenAI();
    const transcription = await openai.audio.transcriptions.create({
    zfile: fs.createReadStream("/path/to/file/audio.mp3"),
    model: "whisper-1",
  });

  return transcription;
}

function SpeechToText(){
    
    const text = main();
    return (
        <div>
            <p>
                {text}
            </p>
        </div>
    );
}

export default SpeechToText;