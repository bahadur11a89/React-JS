function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior    
    console.log("Form was Submitted");
}


export default function Form() {
    return(
        <form action="">
            <input type="text" placeholder="Enter Your Name"/> <br /> <br /> 
            <input type="email" placeholder="Enter Your Email"/> <br /> <br />
            <input type="password" placeholder="Enter Your Password"/> <br /> <br />    
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}