import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "addOne": return state + 1;
        case "addFive": return state + 5;
        case "reset": return initialState;
        default: return state;

    }

}

const ReducerCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            count is :{count}
            <button onClick={() => dispatch("addOne")}>add one</button>
            <button onClick={() => dispatch("addFive")}>add five</button>
            <button onClick={() => dispatch("reset")}>add reset</button>

        </div>
    );
}

export default ReducerCounter;