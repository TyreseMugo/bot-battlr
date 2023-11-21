import React from "react";

const ChosenBot = ({ selectedBots, onRemoveBot }) => {
  const handleRemoveClick = (bot) => {
    onRemoveBot(bot);
  };

  const renderSelectedBots = () => {
    return selectedBots.map((bot) => (
      <BotCard key={bot.id} bot={bot} onClick={() => handleRemoveClick(bot)} />
    ));
  };

  return (
    <div maincontainer="chosen-bot">
      <h2>Chosen Bot</h2>
      <div maincontainer="bot-cards">
        {selectedBots && renderSelectedBots()}
      </div>
    </div>
  );
};

const BotCard = ({ bot, onClick }) => (
  <div maincontainer="bot-card" onClick={onClick}>
    <h2>Name: {bot.name}</h2>
    <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
    <p>
      Catchphrase: {bot.catchphrase}
    </p>
    <p>Health: {bot.health}</p>
    <p>Type: {bot.bot_class}</p>
    <p>Damage: {bot.damage}</p>
    <p>Armor: {bot.armor}</p>
  </div>
);

export default ChosenBot;
