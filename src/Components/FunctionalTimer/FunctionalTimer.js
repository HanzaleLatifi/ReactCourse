import React, { useState, useEffect } from 'react';
const FunctionalTimer = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const Timer = setInterval(() => {
            setCount(count + 1)
        }, 1000);

        return () => {
            clearInterval(Timer);
        };
    }, [count])
    return (
        <div>
            FunctionalTimer:{count}

        </div>
    );
}

export default FunctionalTimer;