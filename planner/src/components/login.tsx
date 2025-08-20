import React, { useState } from "react";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleChangePassword = (e:React.ChangeEvent<HTMLInputElement>) => setPassword(()=>e.target.value);
  const handleChangeUser = (e:React.ChangeEvent<HTMLInputElement>) => setUsername(()=>e.target.value);

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleChangeUser}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button type="submit">Login</button>
      <div>
        <a href="/register">Register</a>
      </div>
    </div>
  );
};
