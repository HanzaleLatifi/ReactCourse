import { useContext } from "react";
import { CounterContext, CounterContextDispatcher } from "./CounterProvider";

const CounterOne = () => {
    const count = useContext(CounterContext);
    const setCount = useContext(CounterContextDispatcher);

    return (
        <div>
            count is : {count}
            <button onClick={() => { setCount(count + 1) }} >add one</button>

        </div>

    );
}

export default CounterOne;