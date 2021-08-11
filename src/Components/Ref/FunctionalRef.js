import React, { useRef, useEffect } from 'react';
const FunctionalRef = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();


    }, [])

    return (
        <input ref={inputRef} />

    );
}

export default FunctionalRef