import { useState } from 'react';

export default function Button(props) {
    const [counter, setcounter] = useState(1);

    function increment() {
     setcounter(counter + 1);
    } 

    return (
        <>
            <span>{counter}</span>
            <button onClick={increment}>{props.children}</button>
            <br />
        </>
        );
}