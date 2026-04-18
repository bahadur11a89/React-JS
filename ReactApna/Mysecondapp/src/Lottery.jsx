import React, { useState } from 'react'
import "./Lottery.css";
import { genTicket } from './Helper';

const Lottery = () => {

    let [ticket, setticket] = useState(genTicket(3));

    // ✅ Fix 1: function define karo
    const buyTicket = () => {
        setticket(genTicket(3));
    }

    // ✅ Fix 2: winning logic define karo
    const isWinning = ticket.reduce((sum, num) => sum + num, 0) === 15;

    return (
        <>
            <h1>Lottery Game</h1>
            <br />

            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
                <br /> <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
             <br />

            <h3>{isWinning && "Congratulations, you won 🎉"}</h3>
        </>
    )
}

export default Lottery;