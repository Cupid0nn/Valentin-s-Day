import React from 'react';
import Message from './components/message';
import FloatingHearts from './components/floatinghearts';
import GiftEmoji from './components/giftemoji';
import './globals.css';

const Home: React.FC = () => (
  <div className="relative overflow-hidden p-4">
    <Message name="Mi meimei Toda preciosa" />
    <GiftEmoji />
    <FloatingHearts />
  </div>
);

export default Home;
