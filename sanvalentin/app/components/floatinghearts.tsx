import React from 'react';

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 20 }).map((_, i) => (
    <div key={i} className="heart" style={{ top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw` }} />
  ));
  return <>{hearts}</>;
};

export default FloatingHearts;
