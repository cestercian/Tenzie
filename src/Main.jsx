import { useState, useEffect } from "react";
import Die from "./Die.jsx";
import { nanoid } from "nanoid";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

export default function () {
  //dice numbers array which is displayed
  const [numbers, setNumbers] = useState([]);

  const gameWon =
      numbers.every(item => item.value === numbers[0].value) &&
      numbers.every(item => item.isHeld === true)

  function inCount(){
     setNumbers(prevState =>
         prevState.map(dice =>
             dice.isHeld === false ?
                 {...dice, value : Math.ceil(Math.random() * 6)}:
                 dice
        )
    )
  }

    //to generate random number in dice array
  useEffect(() => {
    let numbersArr = [];
    function generateNO() {
      for (let i = 0; i < 10; i++) {
        const randomNo = Math.ceil(Math.random() * 6);
        numbersArr.push({
          value: randomNo,
          isHeld: false,
          id: nanoid(),
        });
      }
      setNumbers(numbersArr);
    }
    generateNO();
  }, []);

    function holdDice(id){
      setNumbers(prevState =>
          prevState.map((die)=>
              die.id === id ?
                  {...die,isHeld:!die.isHeld}:
                  die
          )
      )
    }

    // arrow function to create dice elements
  const diceElements = numbers.map((num) => (
    <Die
        number={num.value}
        key={num.id}
        isHeld={num.isHeld}
        hold = {()=>holdDice(num.id)}/>
  ));
  const { width, height } = useWindowSize()
  return (
    <>
      <Confetti
          width={width}
          height={height}
      />
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same.
          Click each die to freeze it at its current value between rolls.</p>
        <div className={"dice-container"}>{diceElements}</div>
          <p></p><p></p>
        <button className={"roll-dice"} onClick={inCount}>
          {gameWon?"New Game":"Roll"}
        </button>
      </main>
    </>
  );
}
