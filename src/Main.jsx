import {useState,useEffect } from "react";
import Die from "./Die.jsx";

export default function (){

    const [numbers,setNumbers] = useState([])

    let numbersArr = []

    useEffect(()=>{
        for(let i=0;i<10;i++){
            const randomNo = Math.ceil(Math.random()*6)
            numbersArr.push(randomNo)
        }
    },[])

    numbersArr.map(()=>{
        setNumbers(()=>{
            numbers.push(numbersArr)
        })
    })

    return(
        <>
            <main>

                <div className={"dice-container"}>
                    <Die
                        number={1}
                    />
                    <Die
                        number={1}
                    />
                    <Die
                        number={1}
                    />
                    <Die
                        number={1}
                    />
                    <Die
                        number={1}
                    />
                    <Die
                        number={1}
                    />
                    <Die
                        number={1}
                    />
                    <Die
                        number={1}
                    />
                    <Die
                        number={1}
                    />
                    <Die
                        number={1}
                    />
                </div>
            </main>
        </>
    )
}