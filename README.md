
# Tenzies Game

Tenzies is a fun and interactive dice game built using **React 19 Canary**. The objective of the game is to roll the dice until all dice show the same number. Players can "freeze" dice in place, keeping their current value between rolls.

## Features

- **React 19 Canary**: Utilizes the latest experimental version of React for modern features.
- **Confetti**: Celebrate when all dice are the same using the `react-confetti` library.
- **Dice Interaction**: Click on dice to "freeze" them in place while rolling others.
- **Game Status**: Displays messages such as "You won!" or "Keep rolling to match all dice!".
- **Responsive**: Automatically adjusts for different screen sizes with the help of `react-use` and `react-confetti`.

## Getting Started

### Prerequisites

- **Node.js** (v16 or later)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/tenzies-game.git
   cd tenzies-game
   ```

2. **Install dependencies**:

   Since this project uses **React 19 Canary**, you'll need to install React's canary versions. You can do this by running the following command:

   ```bash
   npm install react@canary react-dom@canary
   ```

   Alternatively, use yarn:

   ```bash
   yarn add react@canary react-dom@canary
   ```

3. **Install other dependencies**:

   The game also requires `react-confetti`, `nanoid`, and `react-use`. You can install them by running:

   ```bash
   npm install react-confetti nanoid react-use
   ```

   Or, if you're using yarn:

   ```bash
   yarn add react-confetti nanoid react-use
   ```

4. **Run the development server**:

   ```bash
   npm start
   ```

   This will start the React development server and open the game in your browser at `http://localhost:3000`.

   Or, using yarn:

   ```bash
   yarn start
   ```

## Gameplay

- **Objective**: Roll the dice until all dice show the same number. You can freeze a die by clicking on it.
- **Rules**: 
  - If you roll a die and it’s not frozen, it will generate a random value between 1 and 6.
  - If all dice are the same and frozen, the game will end, and confetti will fall to celebrate your victory.
  
## Game Components

1. **Die**: Represents a single die, where each die can be clicked to toggle its freeze state.
2. **Game Status**: Displays whether you're still rolling or if you've won.
3. **Button**: The "Roll" button triggers the roll of the dice. If the game is won, the button will offer the option to start a new game.

## Technologies Used

- **React 19 Canary**: The game is built using the latest experimental version of React for modern hooks and features.
- **React Confetti**: Adds a fun confetti effect when the game is won.
- **React-Use**: Provides utilities like `useWindowSize` to make the game responsive.
- **Nanoid**: Generates unique IDs for each die.

## Known Issues

- **React 19 Canary**: Since React 19 is an experimental version, there might be breaking changes or issues in the future. Please ensure that the dependencies you're using are compatible with React 19.

## Contributing

Feel free to fork this project and create a pull request if you have any improvements or bug fixes. Ensure that the code adheres to the current coding style and functionality.

## License

This project is licensed under the MIT License.
