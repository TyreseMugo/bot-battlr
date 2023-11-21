# Bot Battlr App

This is a simple React application called Bot Battlr that allows users to select and manage a collection of bots. The application consists of two main components: `BotCard` and `ChosenBot`.

## Features

  - Fetches a list of bots from a specified API endpoint (`http://localhost:3000/bots`) using the `fetch` API.
  - Displays a list of bots with their details, including name, image, catchphrase, health, type, damage, and armor.
  - Allows users to select a bot by clicking on it.
  - Provides a "Discharge" button (X) that, when clicked, triggers the `onDischargeBot` function passed from the parent component (`App`). The function sends a DELETE request to the API to remove the selected bot from the collection.

- **ChosenBot Component:**
  - Displays the selected bots in a separate section.
  - Provides a list of selected bots with the same details as in the `BotCard` component.
  - Allows users to remove a selected bot by clicking on it, triggering the `onRemoveBot` function passed from the parent component (`App`).

 ** App Component **
  - Maintains the state of selected bots using the `useState` hook.
  - Defines functions (`handleBotSelect`, `handleRemoveBot`, `handleDischargeClick`) to manage the selected bots.
  - Passes these functions as props to the `BotCard` and `ChosenBot` components.
  - Coordinates the interactions between the two components.

  ## How to use
  Open in browser and the contents should be shown.


