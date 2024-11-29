import React, { useState, useRef } from 'react';
import SpeechToText from './SpeechToText';
import './Sound.css';

function Record() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const tempMp3 = 'Thaino/src/assets/temp.mp3';

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      setAudioBlob(new Blob(audioChunksRef.current, { type: 'audio/mp3' }));
      if (audioBlob) {
        setAudioUrl(URL.createObjectURL(audioBlob));
      }
      audioChunksRef.current = []; // Reset audio chunks for next recording
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    setAudioUrl(tempMp3);
  };

  return (
    <div className="recorder">
      <button className="recordb" onClick={isRecording ? stopRecording : startRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>

      {audioUrl && (
        <div className="sigma1">
          <audio controls src={audioUrl}></audio>
          {audioBlob && (
            <SpeechToText audioBlob={audioBlob} />
          )}
        </div>
      )}
    </div>
  );
}

export default Record;
