import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState();
  const [fullname, setfullName] = useState();

  const InputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmit = () => {
    setfullName(name);
  };
  return (
    <>
      <div>
        <h1>Hello {fullname}!</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={InputEvent}
          value={name}
        />
        <button onClick={onSubmit}>Click me</button>
      </div>
    </>
  );
};
export default App;
