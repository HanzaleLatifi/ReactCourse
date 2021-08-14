import { useCount, useCountActions } from "./CounterProviderr";


const Counter = () => {
    const count = useCount();
    const dispatch = useCountActions();



    return (
        <div>
            count is : {count}
            <button onClick={() => dispatch({ type: "add", value: 5 })} >add five</button>
            <button onClick={() => dispatch({ type: "decrement", value: 1 })} >dec one</button>
            <button onClick={() => dispatch({ type: "reset" })} >reset</button>


        </div>

    );
}

export default Counter;