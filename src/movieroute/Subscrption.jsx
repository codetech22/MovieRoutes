import React from 'react'

import { Link } from 'react-router-dom'

const Subscrption = () => {
  return (
    <div style={{height:"500px",width:"500px",border:"2px solid black",position:"absolute",top:"90px",backgroundColor:"lightskyblue"}}>
      <h1 style={{padding:"10px",fontFamily:"-moz-initial"}}><b>Create a New Account</b><br/>
      <emp>Complete your profile by filling in this account creation form.</emp></h1><hr></hr><hr></hr>
     
      <label for="" style={{padding:"10px"}}>Name</label><br/>
      <input type="text" name='First' placeholder="First" style={{position:"absolute",left:"10px"}}></input><input type='text' name='last' placeholder='Last' style={{position:"absolute",left:"220px"}}></input>

<br/><br/>


<label for="" style={{padding:"10px"}}>Email</label>  <label for="" style={{position:"absolute",left:"217px"}}>Birthday</label>   
<br/>

<input type="email" name='email' placeholder='email@gmail.com' style={{position:"absolute",left:"10px"}} ></input>      <input type="date" name='birthday' placeholder='MM/DD/YYYY' style={{position:"absolute",left:"217px"}}></input>   
<br/><br/>


<label for="" style={{padding:"10px"}}>Preferred Username</label><br/>
<input type="email" name='email' style={{position:"absolute",left:"10px"}}></input>
<br/><br/>

<label for="" style={{padding:"10px"}}>Do you want to receive updates by email?</label><br/>
<input type="radio" name='' value="yes"/>yes  <input type="radio" name='' value="yes" />No

<br/><br/>

<center><button style={{padding:"10px", fontSize:"20px",color:"blue"}}><b>CREATE ACCOUNT</b></button></center>








    <div>
<Link to="/created" style={{position:"absolute",left:"180px",fontSize:"20px",top:"368px",color:"transparent"}}>Create Account</Link>
    </div>


    </div>
  )
}

export default Subscrption
