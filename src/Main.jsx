import {useState,useEffect } from "react";
import Die from "./Die.jsx";

export default function (){

    const [number,setNumbers]=useState([])

    let [count,setCount] = useState(0)

    function inCount(){
        setCount((prevState)=>
            prevState+1
        )
    }

    useEffect(()=>{
        let numbersArr = []
        function generateNO(){
            for(let i=0;i<10;i++){
                const randomNo = Math.ceil(Math.random()*6)
                numbersArr.push(randomNo)
            }
            setNumbers(numbersArr)
        }
        generateNO()
    },[count])

    const diceElements = number.map((num)=>
        <Die key={index} number={num}/>
    )

    return(
        <>
            <main>
                <p></p>
                <p></p>
                <div className={"dice-container"}>
                    {diceElements}
                </div>
                <p></p>
                <p></p>
                <button onClick={inCount}>
                    Roll Dice
                </button>
            </main>
        </>
    )
}