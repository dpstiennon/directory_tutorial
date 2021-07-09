  import React, {useState} from 'react';
import {Input, Button, TextField} from "@material-ui/core";

const NewPersonForm = (props) => {
  const [name, setName] = useState("David")
  const [address, setAddress] = useState("123 Woodland")
  const [email, setEmail] = useState('dstiennon@lenderclose.com')
  
  
  const handleNameChange = function(e) {
    setName(e.target.value)
  }
  
  const handleAddressChange = function(e){
    setAddress(e.target.value)
  }
  
  const handleEmailChange = function (e){
    setEmail(e.target.value)
  }
  
  const handleButtonClick = function(e) {
    props.addPerson({
      name: name,
      address: address,
      email: email
    })
    setName('')
    setAddress('')
    setEmail('')
  }
  
  return (
    <form>
      <div>
        <label>Name</label>
        <TextField variant="outlined" color="primary" label="name" value={name} onChange={handleNameChange}/>
      </div>
      <div>
        <label>Address</label>
        <TextField variant="outlined" color="primary" value={address} onChange={handleAddressChange}/>
      </div>
      <div>
        <label>Email</label>
        <TextField variant="outlined" color="primary" value={email} onChange={handleEmailChange}/>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={handleButtonClick} >Add</Button>
      </div>
    </form>
  );
};

export default NewPersonForm;