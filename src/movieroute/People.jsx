import React from 'react'
import Tvshows from './Tvshows'
import More from './More'
import Movie from './Movie'
import { Link } from 'react-router-dom'





const People = () => {
  return (
    <div style={{position:"absolute",left:"250px"}}>
      <h1>People</h1>
      <b><Link to='/movie' style={{color:"red",fontSize:"20px" ,padding:"20px"}}>Movie</Link></b>
      <b><Link to='/Tvshows' style={{color:"red",fontSize:"20px" ,padding:"20px"}}>Tvshows</Link></b>
      <b><Link to='/people' style={{color:"red",fontSize:"20px" ,padding:"20px"}}>people</Link></b>
      <b><Link to='/more' style={{color:"red",fontSize:"20px" ,padding:"20px"}}>more</Link></b>

<div style={{position:"absolute",left:"700px",top:"30px"}}>
    <b><Link to='/add' style={{color:"purple",padding:"20px"}}>Add</Link></b>
      <b><Link to='/box'  style={{color:"purple",padding:"20px"}}>Box</Link></b>
      <b><Link to='/alarm'  style={{color:"purple",padding:"20px"}}>Alarm</Link></b>
      <b><Link to='circle'  style={{color:"purple",padding:"20px"}}>Circle</Link></b>
      <b><Link to='/sear'  style={{color:"purple",padding:"20px"}}>Search</Link></b>
      </div>


      <div>
    <h1 style={{backgroundColor:"wheat",fontSize:"20px" , position:"absolute",top:"55px",left:"240px",color:"white"}}>List of Peoples</h1>
</div>

<div style={{height:"400px",width:"700px",border:"5px solid black",borderColor:"yellow",position:"absolute",top:"80px"}}>
<b><h1 style={{fontFamily:"cursive",padding:"10px",color:"black"}}>Here is Peoples!</h1></b>
<center><h1 style={{fontSize:"30px",color:"red",fontFamily:"monospace"}}><b>404 ErroR!</b></h1></center><br/><center><h1 style={{fontSize:"50px",fontFamily:"fantasy",color:"blue"}}>You need to be authorize for hang in!! </h1></center>

</div>





      </div>
  
  )
}

export default People
