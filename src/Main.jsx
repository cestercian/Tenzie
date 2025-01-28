import Die from "./Die.jsx";

export default function (){
    return(
        <>
            <main>
                <div className={"dice-container"}>
                    <Die
                        number={5}
                    />
                    <Die
                        number={1}
                    />
                    <Die
                        number={6}
                    />
                    <Die
                        number={7}
                    />
                    <Die
                        number={1}
                    />
                    <Die
                        number={9}
                    />
                    <Die
                        number={3}
                    />
                    <Die
                        number={4}
                    />
                    <Die
                        number={1}
                    />
                    <Die
                        number={2}
                    />
                </div>
            </main>
        </>
    )
}