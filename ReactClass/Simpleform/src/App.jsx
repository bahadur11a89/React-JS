import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState([]);

  const handleHobby = (e) => {
    if (e.target.checked) {
      setHobby([...hobby, e.target.value]);
    } else {
      setHobby(hobby.filter((h) => h !== e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, gender, hobby);
  };

  return (
    <form onSubmit={handleSubmit}>
       <b>Name:-</b>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />
      <b>Gender:-</b>
      <input
        type="radio"
        value="male"
        checked={gender === "male"}
        onChange={(e) => setGender(e.target.value)}
      /> Male

      <input
        type="radio"
        value="female"
        checked={gender === "female"}
        onChange={(e) => setGender(e.target.value)}
      /> Female

      <br /><br />
       <b>Hobby:-</b>
      <input type="checkbox" value="coding" onChange={handleHobby} /> Coding
      <input type="checkbox" value="reading" onChange={handleHobby} /> Reading

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;