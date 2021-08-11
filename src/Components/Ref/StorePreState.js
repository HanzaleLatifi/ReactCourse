import React, { useState, useRef, useEffect } from 'react';
const StorePreState = () => {
    const [inputValue, setInputValue] = useState("");
    const [count, setCount] = useState(0);
    const perValue = useRef();
    const perCount=useRef();


    const changeHandler = (e) => {

        setInputValue(e.target.value)
    };
    useEffect(() => {
        perValue.current = inputValue;

    }, [inputValue]);
    useEffect( ()=>{
        perCount.current=count;

    },[count] )

    return (
        <div>
            <input type="text" onChange={changeHandler} />
            <p>my name is {inputValue} and  pervios:{perValue.current}
             </p>
            
            <button onClick={()=>setCount(Math.ceil(Math.random()*100))}>get random</button>
            <p>count is:{count}   pervios:{perCount.current} </p>


        </div>
    );
}

export default StorePreState;
