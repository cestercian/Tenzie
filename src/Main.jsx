import {useState,useEffect } from "react";
import Die from "./Die.jsx";

export default function (){

    const [number,setNumbers]=useState([])

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
    },[])

    const diceElements = number.map((num)=>
        <Die number={num}/>
    )

    return(
        <>
            <main>
                <div className={"dice-container"}>
                    {diceElements}
                </div>
            </main>
        </>
    )
}