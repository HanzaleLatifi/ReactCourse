import React from 'react';
const MemoComp = (props) => {
    console.log('memoo')
    return (
        <div>Memo---{props.name}</div>
    );
}

export default React.memo(MemoComp);