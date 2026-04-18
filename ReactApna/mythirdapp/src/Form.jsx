import { useState } from "react";

export default function Form() {
    let [fulName, setfullName] = useState("")


    let handleNameChange = (event) => {
        setfullNameconsole.log(event.target);
    };

    return (
        <form>
            <input placeholder="Enter your name" type="text" value={fulName} onChange={handleNameChange} />
            <button type="submit">Submit</button>
        </form>
    );
}