import React, { useState } from "react";

function TicketNum({ num }) {
  return (
    <span className="px-4 py-2 border rounded-xl text-xl font-bold bg-white shadow">
      {num}
    </span>
  );
}

function generateTicket(size) {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}

export default function App() {
  const [size, setSize] = useState(3);
  const [ticket, setTicket] = useState(generateTicket(3));

  const handleGenerate = () => {
    setTicket(generateTicket(size));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 gap-6">
      <h1 className="text-3xl font-bold">🎟️ Lottery Ticket</h1>

      <div className="flex gap-4">
        {ticket.map((num, i) => (
          <TicketNum key={i} num={num} />
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => {
            setSize(3);
            setTicket(generateTicket(3));
          }}
          className="px-4 py-2 bg-green-500 text-white rounded-xl"
        >
          3 Digit
        </button>

        <button
          onClick={() => {
            setSize(6);
            setTicket(generateTicket(6));
          }}
          className="px-4 py-2 bg-purple-500 text-white rounded-xl"
        >
          6 Digit
        </button>
      </div>

      <button
        onClick={handleGenerate}
        className="px-6 py-2 bg-black text-white rounded-xl"
      >
        Generate Ticket
      </button>
    </div>
  );
}
