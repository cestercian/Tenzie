import { useState, useEffect } from "react";
import Die from "./Die.jsx";
import { nanoid } from "nanoid";

export default function () {

  //dice numbers array which is displayed
  const [numbers, setNumbers] = useState([]);


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
                  {...die,isHeld:true}:
                  die
          )
      )
    }

  /**
   * Challenge: Update the `rollDice` function to not just roll
   * all new dice, but instead to look through the existing dice
   * to NOT role any that are being `held`.
   *
   * Hint: this will look relatively similiar to the `hold`
   * function below. When we're "rolling" a die, we're really
   * just updating the `value` property of the die object.
   */



    // arrow function to create dice elements
  const diceElements = numbers.map((num) => (
    <Die
        number={num.value}
        key={num.id}
        isHeld={num.isHeld}
        hold = {()=>holdDice(num.id)}/>
  ));

  return (
    <>
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same.
          Click each die to freeze it at its current value between rolls.</p>
        <div className={"dice-container"}>{diceElements}</div>
          <p></p><p></p>
        <button className={"roll-dice"} onClick={inCount}>
          Roll Dice
        </button>
      </main>
    </>
  );
}
