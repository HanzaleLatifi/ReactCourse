import React, { useReducer } from 'react';

const initialState = 0;
const initialStateSecond = 10;
const reducer = (state, action) => {
    switch (action.type) {
        case "add": return state + action.value;
        case "reset": return initialState;
        default: return state;

    }

}

const ReducerCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countSecond, dispatchSecond] = useReducer(reducer, initialStateSecond);



    return (
        <div>
            <div>
                First-count is :{count}
                <button onClick={() => dispatch({ type: "add", value: 1 })}>add one</button>
                <button onClick={() => dispatch({ type: "add", value: 5 })}>add five</button>
                <button onClick={() => dispatch({ type: "reset" })}>add reset</button>

            </div>


            <div>
                second-count is :{countSecond}
                <button onClick={() => dispatchSecond({ type: "add", value: 1 })}>add one</button>
                <button onClick={() => dispatchSecond({ type: "add", value: 5 })}>add five</button>
                <button onClick={() => dispatchSecond({ type: "reset" })}>add reset</button>

            </div>


        </div>
    );
}

export default ReducerCounter;