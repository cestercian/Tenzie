import { useState, useEffect } from "react";
import Die from "./Die.jsx";
import { nanoid } from "nanoid";

export default function () {

  //dice numbers array which is displayed
  const [numbers, setNumbers] = useState([]);

  let [count, setCount] = useState(0);

    function inCount(){
        setCount((prevState)=>
            prevState+1
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
  }, [count]);

    function holdDice(id){
      setNumbers(prevState =>
          prevState.map((die)=>
              die.id === id ?
                  {...die,isHeld:true}:
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

  return (
    <>
      <main>
        <div className={"dice-container"}>{diceElements}</div>
          <p></p><p></p>
        <button className={"roll-dice"} onClick={inCount}>
          Roll Dice
        </button>
      </main>
    </>
  );
}
