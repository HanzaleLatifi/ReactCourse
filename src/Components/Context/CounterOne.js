import { useCount, useCountActions } from "./CounterProvider";


const CounterOne = () => {
    const count = useCount();
    const setCount = useCountActions();

    return (
        <div>
            count is : {count}
            <button onClick={() => { setCount(count + 1) }} >add one</button>

        </div>

    );
}

export default CounterOne;