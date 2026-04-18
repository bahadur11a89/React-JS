import { useState } from "react";

export default function LickButton() {

    let [clicked, setClicked] = useState(false);

    let toggle = () => {
        setClicked(!clicked);
    }

    return(
        <div>
            <p onClick={toggle}></p>

            <i className={clicked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
        </div>
    )
}