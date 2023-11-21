import React, { useState, useEffect } from 'react';
import './App.css';
import BotCard from './components/BotCard';
import ChosenBot from './components/ChosenBot';

function App() {
  const [selectedBots, setSelectedBots] = useState([]);

  const handleBotSelect = (selectedBot) => {
    setSelectedBots([...selectedBots, selectedBot]);
  };

  const handleRemoveBot = (bot) => {
    setSelectedBots(selectedBots.filter((selectedBot) => selectedBot.id !== bot.id));
  };

  const handleDischargeClick = async (botToDischarge) => {
    try {
      const response = await fetch(`http://localhost:3000/bots/${botToDischarge.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        handleRemoveBot(botToDischarge);
      } else {
        console.error('Failed to discharge bot');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div maincontainer="app-container">
      <ChosenBot selectedBots={selectedBots} onRemoveBot={handleRemoveBot} />
      <BotCard onBotSelect={handleBotSelect} onDischargeBot={handleDischargeClick} />
    </div>
  );
}

export default App;
