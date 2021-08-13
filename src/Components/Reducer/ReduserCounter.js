import React, { useReducer } from 'react';

const initialState = { firstCount: 0, secondCount: 5 };
const reducer = (state, action) => {
    switch (action.type) {
        case "addFirst": return { ...state, firstCount: state.firstCount + action.value };
        case "addSecond": return { ...state, secondCount: state.secondCount + action.value };
        case "reset": return initialState;
        default: return state;

    }

}

const ReducerCounter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                First-count is :{count.firstCount}
                <button onClick={() => dispatch({ type: "addFirst", value: 1 })}>add one</button>
                <button onClick={() => dispatch({ type: "addFirst", value: 5 })}>add five</button>
            </div>

            <button onClick={() => dispatch({ type: "reset" })}>add reset</button>

            <div>
                second-count is :{count.secondCount}
                <button onClick={() => dispatch({ type: "addSecond", value: 1 })}>add one</button>
                <button onClick={() => dispatch({ type: "addSecond", value: 5 })}>add five</button>
            </div>


        </div>
    );
}

export default ReducerCounter;