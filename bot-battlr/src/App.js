import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
// import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <div id="wartime">
        <h1 id="header">WAR-TIME</h1>
      </div>
      {/* <YourBotArmy/> */}
      <BotCollection/>
      {/* <Routes>
        <Route path="/bots" element={<BotCollection/>} />
      </Routes> */}
    </div>

  );
}

export default App;