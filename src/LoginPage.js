import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "react-router";

const validUsers = {
  'David': 0,
  'Sampada' : 1,
  'Colby': 2,
  'Keifer': 3,
  'Luke': 4,
  'Adis': 5
}

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const history = useHistory();
  
  const handleLogin = (e) => {
    if (Object.keys(validUsers).includes(username)) {
      history.push(`/directory/${validUsers[username]}`)
    }
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