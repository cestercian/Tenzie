import Die from "./Die.jsx";

export default function (){

    const randomNo = Math.floor(Math.random()*6)


    return(
        <>
            <main>

                <div className={"dice-container"}>
                    <Die
                        number={randomNo}
                    />
                    <Die
                        number={randomNo}
                    />
                    <Die
                        number={randomNo}
                    />
                    <Die
                        number={randomNo}
                    />
                    <Die
                        number={randomNo}
                    />
                    <Die
                        number={randomNo}
                    />
                    <Die
                        number={randomNo}
                    />
                    <Die
                        number={randomNo}
                    />
                    <Die
                        number={randomNo}
                    />
                    <Die
                        number={randomNo}
                    />
                </div>
            </main>
        </>
    )
}