import './App.css';
import Header from "./Header";
import React, {useState} from "react";
import NewPersonForm from "./components/NewPersonForm";
import PersonCard from "./components/PersonCard";
import {LengthJudge} from "./components/LengthJudge";
import {Footer} from "./components/Footer";

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
