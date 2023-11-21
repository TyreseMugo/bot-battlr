import React, { useState, useEffect } from "react";

const BotCard = ({ onBotSelect, onDischargeBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/bots");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBots(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleBotClick = (selectedBot) => {
    onBotSelect(selectedBot);
  };

  const handleDischargeClick = (botToDischarge) => {
    onDischargeBot(botToDischarge);
  };

  return (
    <div>
      <h1>Bot Card</h1>
      {bots && (
        <div maincontainer="bot-cards">
          {bots.map((bot) => (
            <BotItem
              key={bot.id}
              bot={bot}
              onBotClick={() => handleBotClick(bot)}
              onDischargeClick={() => handleDischargeClick(bot)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const BotItem = ({ bot, onBotClick, onDischargeClick }) => (
  <div onClick={onBotClick}>
    <h2>Name: {bot.name}</h2>
    <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
    <p>Catchphrase: {bot.catchphrase}</p>
    <p>Health: {bot.health}</p>
    <p>Type: {bot.bot_class}</p>
    <p>Damage: {bot.damage}</p>
    <p>Armor: {bot.armor}</p>
    <button
   
      onClick={onDischargeClick}
    >
      X
    </button>
  </div>
);

export default BotCard;
