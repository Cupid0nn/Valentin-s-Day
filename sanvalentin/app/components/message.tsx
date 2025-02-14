import React from 'react';

interface MessageProps {
  name: string;
}

const Message: React.FC<MessageProps> = ({ name }) => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 text-pink-800">
    <h1 className="text-4xl font-bold animate-fade-in animate-breathing">Feliz San Valentín, {name}!</h1>
    <p className="mt-4 text-lg animate-fade-in animate-breathing">¡Te amo demasiado Mucho Mucho Mucho Mucho Mucho Mucho Mucho Mucho Mucho Mucho !</p>
  </div>
);

export default Message;
