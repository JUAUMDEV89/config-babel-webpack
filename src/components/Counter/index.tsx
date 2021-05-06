import { useState } from "react"

export default function Counter(){

    const [counter, setCounter] = useState(0);

    function handleAddCounter(){
        setCounter(counter + 1);
    }

    function handleRemoveCounter(){
        setCounter(counter - 1);
    }

    return(
        <div>
            <h3>{ counter }</h3>

            <button onClick={ handleAddCounter }>Increment</button>
            <button onClick={ handleRemoveCounter }>Decrement</button>
        </div>
    )
}