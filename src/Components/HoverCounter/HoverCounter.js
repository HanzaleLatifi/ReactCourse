import React, { useState } from 'react';
import UpdatedComponent from '../Hoc/WhitCounter';
const HoverCounter = (props) => {


    return (
        <button onMouseOver={props.incrementCount}>{props.count}</button>
    );
}

export default UpdatedComponent(HoverCounter, 10);


