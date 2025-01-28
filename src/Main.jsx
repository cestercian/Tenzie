import { useState, useEffect } from "react";
import Die from "./Die.jsx";
import { nanoid } from "nanoid";

export default function () {
  const [numbers, setNumbers] = useState([]);

  let [count, setCount] = useState(0);

    function inCount(){
        setCount((prevState)=>
            prevState+1
        )
    }

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

  const diceElements = numbers.map((num) => (
    <Die number={num.value} key={num.id} />
  ));

  return (
    <>
      <main>
        <div className={"dice-container"}>{diceElements}</div>
        <button className={"roll-dice"} onClick={inCount}>
          Roll Dice
        </button>
      </main>
    </>
  );
}
