import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "react-router";
import UserContext from "./components/UserContext";



const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const userContext = useContext(UserContext)
  
  const handleLogin = (e) => {
    userContext.actions.login(username, password)
  }
  
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div>
          <input type="button" value="Login" onClick={handleLogin}/>
        </div>
        <p>
          <span>Don't have an account yet?  Click<Link to="/create-account">Here</Link> to create one!</span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;