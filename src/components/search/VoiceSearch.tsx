import React, { useState } from 'react';
import { Mic, StopCircle } from 'lucide-react';

export const VoiceSearch = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulated voice recognition
      setTranscript('');
      setTimeout(() => {
        setTranscript('Listening...');
      }, 500);
    } else {
      setTranscript('');
    }
  };

  return (
    <div className="text-center">
      <button
        onClick={toggleRecording}
        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
          isRecording 
            ? 'bg-red-500/20 hover:bg-red-500/30' 
            : 'bg-purple-500/20 hover:bg-purple-500/30'
        }`}
      >
        {isRecording ? (
          <StopCircle className="w-10 h-10 text-red-500 animate-pulse" />
        ) : (
          <Mic className="w-10 h-10 text-purple-500" />
        )}
      </button>
      <p className="mt-4 text-gray-300">{transcript || 'Click to start speaking'}</p>
    </div>
  );
};