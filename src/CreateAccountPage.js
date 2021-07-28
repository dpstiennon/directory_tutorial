import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

const CreateAccountPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  
  const history = useHistory()
  
  const create = () => {
    axios.post('http://localhost:5000/api/accounts', formState)
      .then(() => {
        history.push('/')
      })
  }
  
  const setFormField = field => e => {
    setFormState({...formState, [field]: e.target.value})
  }
  
  return (
    <div>
      <h3>Create a New Account</h3>
      <div>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={formState.name} onChange={setFormField('name')}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={formState.email} onChange={setFormField('email')}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={formState.password}
                   onChange={setFormField('password')}/>
          </div>
          <div>
            <label htmlFor="password">Type your password again</label>
            <input type="password" name="password" value={formState.password2}
                   onChange={setFormField('password2')}/>
          </div>
          <div>
            <input type="button" value="Create Account" onClick={create}/>
          </div>
          <p>
            <Link to="/">Back To Login Page</Link>
          </p>
        </form>
      </div>
    
    </div>
  );
};

export default CreateAccountPage;
;