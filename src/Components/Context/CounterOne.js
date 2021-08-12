import { useCount, useCountActions } from "./CounterProvider";


const CounterOne = () => {
    const count = useCount();
    const { addOne, addFive } = useCountActions();

    // const addOne = () => {
    //     setCount(prevCount => prevCount + 1)
    // }
    // const addFive = () => {
    //     setCount(prevCount => prevCount + 5)
    // }

    return (
        <div>
            count is : {count}
            <button onClick={addOne} >add one</button>
            <button onClick={addFive} >add five</button>


        </div>

    );
}

export default CounterOne;