import React, { useState } from 'react';
import UpdatedComponent from '../Hoc/WhitCounter';
const ClickCounter = (props) => {
    // const [count, setCount] = useState(0);

    // const incrementHandler = () => {
    //     setCount(count + 1);
    // }
    console.log(props)


    return (
        <button onClick={props.incrementCount}>{props.count}</button>
    );
}


export default UpdatedComponent(ClickCounter, 5);