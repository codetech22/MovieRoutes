import React from 'react'

import { Link } from 'react-router-dom'

const Thrillero = () => {
  return (
    <div style={{position:"absolute",top:"80px"}}>
    <h1 style={{color:"aqua",position:"absolute",left:"500px"}}>Hello,Welcome to Thriller collections,<br/>select movies which you like....</h1>
    <Link to='/mystryo' style={{fontSize:"15px",padding:"10px",position:"absolute",top:"10px"}}><b>Mystry</b></Link>
    <Link to='/actiono' style={{fontSize:"15px",padding:"10px",position:"absolute",top:"50px"}}><b>Action  </b></Link>
    <Link to='/westerno'style={{fontSize:"15px",padding:"10px",position:"absolute",top:"90px"}}><b>western</b></Link>
    <Link to='/fantacyo'style={{fontSize:"15px",padding:"10px",position:"absolute",top:"140px"}}><b>Fantacy</b></Link>
    <Link to='/dramao'style={{fontSize:"15px",padding:"10px",position:"absolute",top:"190px"}}><b> Drama</b></Link>
    <Link to='/comedyo'style={{fontSize:"15px",padding:"10px",position:"absolute",top:"240px"}}><b> Comedy</b></Link>
    <Link to='/adventureo'style={{fontSize:"15px",padding:"10px",position:"absolute",top:"290px"}}><b>Adventure</b></Link>
    <Link to='/thrillero'style={{fontSize:"15px",padding:"10px",position:"absolute",top:"340px"}}><b>Thriller</b></Link>
    <Link to='/horroro'style={{fontSize:"15px",padding:"10px",position:"absolute",top:"390px"}}><b>Horror</b></Link>

      <div style={{height:"350px" , width:"400px" , border:"5px solid orange",position:"absolute",left:"350px",top:"200px"}}>
<h1 style={{color:"red",fontFamily:"cursive",fontSize:"35px",padding:"10px"}}><b><mark>!!!</mark>oops Something went wrong<br/>please check whether you belongs to our subscriber.  <br/>could't able to load..  </b></h1>
      </div>

      <div>
       
       <Link to='/subscription' style={{fontSize:"22px",position:"absolute",left:"1220px"}}> <h1 style={{color:"Highlight",fontSize:"15px"}}>Create an Account? to</h1><b>Subscribe</b></Link>
     </div>
    </div>
  )
}

export default Thrillero
