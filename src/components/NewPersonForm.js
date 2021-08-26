  import React, {useState} from 'react';
import {Input, Button, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ( {
  formLabel: {
    color: 'green'
  },
  formSpacing: {
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    '& $formEntry': {
      margin: 20
    }
  },
  formEntry: {
    display: 'flex',
    width: 300,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
} ))

const NewPersonForm = (props) => {
  const [name, setName] = useState("David")
  const [address, setAddress] = useState("123 Woodland")
  const [email, setEmail] = useState('dstiennon@lenderclose.com')
  
  const styles = useStyles()
  
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
    <form className={styles.formSpacing}>
      <div className={styles.formEntry}>
        <label className={styles.formLabel}>Name</label>
        <TextField variant="outlined" color="primary" label="name" value={name} onChange={handleNameChange}/>
      </div>
      <div className={styles.formEntry}>
        <label className={styles.formLabel}>Address</label>
        <TextField variant="outlined" color="primary" value={address} onChange={handleAddressChange}/>
      </div>
      <div className={styles.formEntry}>
        <label className={styles.formLabel}>Email</label>
        <TextField variant="outlined" color="primary" value={email} onChange={handleEmailChange}/>
      </div>
      <div className={styles.formEntry}>
        <Button variant="contained" color="primary" onClick={handleButtonClick} >Add</Button>
      </div>
    </form>
  );
};

export default NewPersonForm;