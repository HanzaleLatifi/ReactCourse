import React, { useState, useEffect } from 'react';
const FunctionalCounter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => { console.log('count:' + count) }, [count]);



    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)} >count:{count}</button>
        </div>
    );
}

export default FunctionalCounter;