import React, { useState, useRef } from 'react';
import './sound.css';

function Record() {
   const [isRecording, setIsRecording] = useState(false);
   const [audioUrl, setAudioUrl] = useState(null);
   const mediaRecorderRef = useRef(null);
   const audioChunksRef = useRef([]);

   const startRecording = async () => {
       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
       mediaRecorderRef.current = new MediaRecorder(stream);

       mediaRecorderRef.current.ondataavailable = (event) => {
           audioChunksRef.current.push(event.data);
       };

       mediaRecorderRef.current.onstop = () => {
           const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
           const audioUrl = URL.createObjectURL(audioBlob);
           setAudioUrl(audioUrl);
           audioChunksRef.current = [];
       };

       mediaRecorderRef.current.start();
       setIsRecording(true);
   };

   const stopRecording = () => {
       mediaRecorderRef.current.stop();
       setIsRecording(false);
   };

   return (
       <div className="sigma1">
           <button className="recordb" onClick={isRecording ? stopRecording : startRecording}>
               {isRecording ? 'Stop Recording' : 'Start Recording'}
           </button>

           {audioUrl && (
               <div className="recorder">
                   <audio controls src={audioUrl}></audio>
               </div>
           )}
       </div>
   );
}

export default Record;
    