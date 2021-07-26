import React from 'react';

function Scroll(props) {
    return (
        <div style={{overflow: 'scroll', border: '15px solid transparent', height: '80vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll;
