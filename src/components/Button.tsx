import { useState } from "react";

interface ButtonProps {
    color: string;
    children: string;
}

export default function Button(props: ButtonProps) {
    const style = {
        backgroundColor: props.color,
    };
    const [counter, setCounter] = useState(1);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <button type="button" style={style} onClick={increment}>
            {props.children}
            <strong>{counter}</strong>
        </button>
    );
}
