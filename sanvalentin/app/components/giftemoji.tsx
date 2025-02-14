import React from 'react';
import './giftemoji.css';

const GiftEmoji: React.FC = () => (
  <div className="gift-container">
    <span className="gift-emoji" role="img" aria-label="gift">🎁</span>
    <div className="explosion">
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="emoji">{['❤️', '💖', '💕', '💘', '💝'][i % 5]}</div>
      ))}
    </div>
    <div className="te-amo-container">
      TE AMO
    </div>
  </div>
);

export default GiftEmoji;
