function printhello() {
    console.log("Hello World");
}

export default function Button() {

    function handleMouseDown() {
        console.log("Mouse Down");
    }

    function handleMouseUp() {
        console.log("Mouse Up");
    }

    function handleMouseEnter() {
        console.log("Mouse Enter");
    }

    function handleMouseLeave() {
        console.log("Mouse Leave");
    }

    function handleDoubleClick() {
        console.log("Mouse Double Clicked");
    }

    function handleContextMenu() {
        console.log("Right Click Menu");
    }

    function handleKeyDown(event) {
        console.log("Key Down");
        console.log("Key Pressed: ", event.key);
    }

    function handleChange(e) {
        console.log(e.target.value);
    }

    return (
        <div>

            <button onClick={printhello}>
                Buy Now
            </button>

            <p onMouseDown={handleMouseDown}>
                Mouse Down Event
            </p>

            <p onMouseUp={handleMouseUp}>
                Mouse Up Event
            </p>

            <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{border:"1px solid black",padding:"10px"}}
            >
                Hover Here
            </div>

            <p onDoubleClick={handleDoubleClick}>
                Double Click Here
            </p>

            <p onContextMenu={handleContextMenu}>
                Right Click Here
            </p>

            <input 
            type="text"
            placeholder="Type Something"
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            />

        </div>
    );
}