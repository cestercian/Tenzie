import { useState, useEffect, useRef } from "react";
import Die from "./Die.jsx";
import { nanoid } from "nanoid";
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';

export default function TenziesGame() {
  const [numbers, setNumbers] = useState([]); // Array to hold dice values
  const [count, setCount] = useState(0); // Counter for game resets
  const buttonRef = useRef(null);
  const { width, height } = useWindowSize();

  // Check if game is won: all dice have the same value and are held
  const gameWon = numbers.every(die => die.value === numbers[0]?.value && die.isHeld);

  // Focus the button when the game is won
  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  // Function to roll dice or start a new game
  function rollDice() {
    if (gameWon) {
      setCount(prev => prev + 1); // Increase game count on win
    }

    setNumbers(prevNumbers => prevNumbers.map(die =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
    ));
  }

  // Generate initial dice values when count changes (new game)
  useEffect(() => {
    function generateDice() {
      const diceArray = Array.from({ length: 10 }, () => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }));
      setNumbers(diceArray);
    }
    generateDice();
  }, [count]);

  // Toggle the 'isHeld' state of a die
  function holdDice(id) {
    setNumbers(prevNumbers => prevNumbers.map(die =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
    ));
  }

  // Map dice array to JSX elements
  const diceElements = numbers.map(die => (
      <Die key={die.id} number={die.value} isHeld={die.isHeld} hold={() => holdDice(die.id)} />
  ));

  return (
      <>
        {gameWon && <Confetti width={width} height={height} />} {/* Confetti effect on win */}
        <main>
          <h1 className="title">Tenzies</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="dice-container">{diceElements}</div>
          <button ref={buttonRef} className="roll-dice" onClick={rollDice}>
            {gameWon ? "New Game" : "Roll"}
          </button>
        </main>
      </>
  );
}
