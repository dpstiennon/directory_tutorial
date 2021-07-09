  import React, {useState} from 'react';

const NewPersonForm = () => {
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
  
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={handleNameChange}/>
      </div>
      <div>
        <label>Address</label>
        <input type="text" value={address} onChange={handleAddressChange}/>
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmailChange}/>
      </div>
    </form>
  );
};

export default NewPersonForm;