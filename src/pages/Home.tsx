import React, { useState } from "react";

const Home = () => {
  // State to manage the greeting message
  const [message, setMessage] = useState("Hello, World!");

  // Function to update the greeting message
  const changeGreeting = () => {
    setMessage("Hello, React!");
  };

  return (
    <div>
      <h1>{message}</h1> {/* Display the greeting message */}
      <button onClick={changeGreeting}>Change Greeting</button>{" "}
      {/* Button to change the message */}
    </div>
  );
};

export default Home;
