import React, { useState, useRef } from 'react';


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
           audioChunksRef.current = []; // Reset audio chunks for next recording
       };


       mediaRecorderRef.current.start();
       setIsRecording(true);
   };


   const stopRecording = () => {
       mediaRecorderRef.current.stop();
       setIsRecording(false);
   };


   return (
       <div>
           <button onClick={isRecording ? stopRecording : startRecording}>
               {isRecording ? 'Stop Recording' : 'Start Recording'}
           </button>


           {audioUrl && (
               <div>
                   <h3>Recorded Audio</h3>
                   <audio controls src={audioUrl}></audio>
               </div>
           )}
       </div>
   );
}


export default Record;