import './App.css';
import Header from "./Header";
import {x} from './Header';
import React, {useState} from "react";
import NewPersonForm from "./components/NewPersonForm";

const startingPeople = [
  {
    name: 'David Stiennon',
    address: '3100 N Chestnut St',
    email: 'dstiennon@lenderclose.com'
  },
  {
    name: 'Justin Oglesby',
    address: 'Somewhere in Des Moines',
    email: 'joglesby@lenderclose.com'
  },
  {
    name: 'Felix Dominguez',
    address: '1612 Oak Tree Dr Denton Tx 76209',
    email: 'fdominguez@lenderClose.com'
  }
]

function Footer(props) {
  return <p> Ending the paragraph here {props.message}</p>
}

function PersonCard(props) {
  return <div style={{backgroundColor: 'green'}}>
    <ul>
      <li>{props.person.name}</li>
      <li>{props.person.address}</li>
      <li>{props.person.email}</li>
    </ul>
  </div>
}

function LengthJudge(props) {
  if (props.people.length > 5) {
    return <h3>That's a lot of people</h3>
  } else {
    return <h3>This is still a small directory</h3>
  }
}

function App() {
  let name = 'David'
  let company = 'LenderClose Inc.'
  let companymessage = 'Thanks for visiting our site'
  
  const [people, setPeople] = useState(startingPeople)
  
  function addPerson(person) {
    const newPeople = [...people]
    newPeople.push(person)
    setPeople(newPeople)
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
      <Footer message={companymessage}></Footer>
    </div>
  );
}

export default App;
