import { useState } from "react";


function FuncComponent() {

    const [counter, setCounter] = useState(0);

    return <div>
        <h1>Class Component</h1>
        <p>
            <button onClick={() => setCounter(counter - 1)}> - </button>
            {counter}
            <button onClick={() => setCounter(counter + 1)}> + </button>
        </p>
    </div>
}

export default FuncComponent;