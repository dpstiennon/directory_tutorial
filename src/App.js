import './App.css';
import Header from "./Header";
import React, {useContext, useEffect, useState} from "react";
import NewPersonForm from "./components/NewPersonForm";
import PersonCard from "./components/PersonCard";
import {LengthJudge} from "./components/LengthJudge";
import {Footer} from "./components/Footer";
import axios from "axios";
import {useParams, useHistory, useLocation} from "react-router";
import UserContext from "./components/UserContext";

const startingPeople = []

function App() {
  let name = 'David'
  let company = 'LenderClose Inc.'
  let companymessage = 'Thanks for visiting our site'
  
  const [people, setPeople] = useState(startingPeople)
  const context = useContext(UserContext);
  // const paramsObject = useParams()
  // const user_id = paramsObject.user_id
  const {user_id} = useParams()
  
  
  useEffect(() => {
    if (!localStorage.getItem('session_token')) {
      context.actions.logout()
    }
  }, [])
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/contacts', {
      headers: {
        Authorization: `JWT ${localStorage.getItem('session_token')}`
      }
    }).then((result) => {
      setPeople(result.data)
    })
  }, [])
  
  
  function addPerson(person) {
    axios.post('http://localhost:5000/api/contacts', person,
      {
        headers: {
          Authorization: `JWT ${localStorage.getItem('session_token')}`
        }
      })
      .then((result) => {
        setPeople(result.data)
      })
  }
  
  return (
    <div>
      <Header id="main-header" className="header-class" companyName={company}></Header>
      {
        people.map(person => <PersonCard key={person.email} person={person}/>)
      }
      
      <LengthJudge people={people}/>
      <p>My name is {name}</p>
      <p>I work at {company}</p>
      <NewPersonForm addPerson={addPerson}/>
      <Footer logout={context.actions.logout} message={companymessage}></Footer>
    </div>
  );
}

export default App;
