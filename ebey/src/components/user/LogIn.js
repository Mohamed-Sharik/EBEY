import React, { useState, useContext } from "react";
import UserContext from "../../context/DataContext";

function LogIn() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, pass });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <br />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default LogIn;

