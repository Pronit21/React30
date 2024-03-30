import { useState } from "react";

function Three() {
    const [input, setInput] = useState('');

    return (
        <div>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <p>User input: {input}</p>
        </div>
    );
}

export default Three;
