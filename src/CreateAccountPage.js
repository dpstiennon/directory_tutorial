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
    
    const [errors, setErrors] = useState({})
    
    const history = useHistory()
  
    const extractError = key => {
      if (errors[key]) {
        return errors[key].join(' ')
      }
      return ''
    }
    
    const create = () => {
      axios.post('http://localhost:5000/api/accounts', formState)
        .then(() => {
          history.push('/')
        }).catch((e) => {
          setErrors(e.response.data)
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
              <span style={{color: 'red'}}>{extractError('name')}</span>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" value={formState.email} onChange={setFormField('email')}/>
              <span style={{color: 'red'}}>{extractError('email')}</span>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={formState.password}
                     onChange={setFormField('password')}/>
              <span style={{color: 'red'}}>{extractError('password')}</span>
            </div>
            <div>
              <label htmlFor="password">Type your password again</label>
              <input type="password" name="password" value={formState.password2}
                     onChange={setFormField('password2')}/>
              <span style={{color: 'red'}}>{extractError('password2')}</span>
            </div>
            <div>
              <input type="button" value="Create Account" onClick={create}/>
              <span style={{color: 'red'}}>{extractError('_schema')}</span>
            </div>
            <p>
              <Link to="/">Back To Login Page</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }

export default CreateAccountPage;