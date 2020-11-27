import React, { useState } from 'react';

function CountButton() {

    const [count, setCount] = useState(0); //initialize the Hook

    function countUp() {
        setCount(count + 1); // function that changing the var in component memory
    }

    // what the component will return => JSX & func (onClick)
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={countUp}>Click me</button>
        </div>
    );
}
export default CountButton;