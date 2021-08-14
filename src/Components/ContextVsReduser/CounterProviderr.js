import React, { useReducer, useContext } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case "add": return state + action.value;
        case "decrement": return state - action.value;
        case "reset": return initialState;
        default: return state;
    }

}

const CounterContext = React.createContext(); //state
const CounterContextDispatcher = React.createContext(); //setState

const CounterProviderr = ({ children }) => {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CounterContext.Provider value={count}  >
            <CounterContextDispatcher.Provider value={dispatch}>
                {children}
            </CounterContextDispatcher.Provider>
        </CounterContext.Provider>




    );
}

export default CounterProviderr;
//custom Hooks
export const useCount = () => useContext(CounterContext);

export const useCountActions = () => useContext(CounterContextDispatcher);
    // retutn dispatch




