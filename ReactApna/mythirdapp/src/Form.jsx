import { useState } from "react";

export default function Form() {
    const [fullName, setFullName] = useState("");

    const handleNameChange = (event) => {
        setFullName(event.target.value);
    };

    return (
        <form>
            <b>Name:-</b>
            <input
                placeholder="Enter your name"
                type="text"
                value={fullName}
                onChange={handleNameChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}