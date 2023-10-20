import React from 'react'
import People from './People'
import Movie from './Movie'
import Tvshows from './Tvshows'
import { Link } from 'react-router-dom'

import './more.css'

// import Mystry from './movieroute/Mystry'
// import Fantacy from './movieroute/Fantacy'
// import Drama from './movieroute/Drama'
// import Comedy from './movieroute/Comedy'
// import Thriller from './movieroute/Thriller'
// import Horror from './movieroute/Horror'





const More = () => {
  return (
    <div style={{position:"absolute",left:"250px"}}>
      <h1>More</h1>
     <b> <Link to='/movie' style={{color:"red",fontSize:"20px" ,padding:"20px" }}>Movie</Link></b>
     <b><Link to='/Tvshows' style={{color:"red",fontSize:"20px" ,padding:"20px"}}>Tvshows</Link></b>
     <b><Link to='/people' style={{color:"red",fontSize:"20px" ,padding:"20px"}}>people</Link></b>
     <b><Link to='/more' style={{color:"red",fontSize:"20px" ,padding:"20px"}}>more</Link></b>





 <div style={{position:"absolute",left:"700px",top:"30px"}}>   
       <b><Link to='/add' style={{color:"purple"}}>Add</Link></b>
      <b><Link to='/box'  style={{color:"purple",padding:"20px"}}>Box</Link></b>
      <b><Link to='/alarm'  style={{color:"purple",padding:"20px"}}>Alarm</Link></b>
      <b><Link to='circle'  style={{color:"purple",padding:"20px"}}>Circle</Link></b>
      <b><Link to='/sear'  style={{color:"purple",padding:"20px"}}>Search</Link></b>
      </div>

      <div>
    <h1 style={{backgroundColor:"wheat",fontSize:"20px" , position:"absolute",top:"55px",left:"320px",color:"white"}}>You may Like This</h1>
</div>



<h1 style={{position:"absolute",left:"630px",top:"85px"}}><b><ins>Click-here</ins></b></h1>


<div style={{height:"450px",width:"700px",border:"5px solid black",borderColor:"yellow",position:"absolute",top:"80px"}}>
{/* <b><h1 style={{fontFamily:"cursive",padding:"10px",color:"black"}}>Categories are!</h1></b> */}
<p>
  <ol>
  
    <li style={{fontSize:"30px", position:"absolute",left:"15px",color:"tomato",top:"20px"}}><b>Genres</b></li>
   <br/>
   <br/>
 <ul>
  <li style={{padding:"5px",position:"absolute",top:"80px"}} className='more'><b>Mystry - <mark>A genre of film that revolves around the solution of a problem or a crime.</mark></b>
  </li>
 </ul>

<br/>

<ul>
  <li style={{padding:"5px",position:"absolute",top:"120px"}} className='more'><b>Fantacy - <mark>Films that belong to the fantacy genre with fantastic themes,usually magic.</mark></b></li>
</ul>


<br/>

<ul>
  <li style={{padding:"5px",position:"absolute",top:"160px"}} className='more'><b>Drama - <mark>A movie or television production with characteristics of serious play.</mark></b></li>
</ul>

<br/>

<ul>
  <li style={{padding:"5px",position:"absolute",top:"200px"}} className='more'><b>Comedy - <mark>A category of film which emphasizes humor.</mark></b></li>
</ul>

<br/>

<ul>
  <li style={{padding:"5px",position:"absolute",top:"240px"}} className='more'><b>Thriller - <mark>A work of fiction or drama designed to hold the interest.</mark></b></li>
</ul>

<br/>

<ul>
  <li style={{padding:"5px",position:"absolute",top:"280px"}} className='more'><b>Horror - <mark>A film in which very frightening or unnatural things happen.</mark></b></li>
</ul>

<br/>

<ul>
<li style={{padding:"5px",position:"absolute",top:"320px"}} className='more'><b>Action - <mark>Action film is a film genre in which the protagonist is thrust into a series.</mark></b></li>
</ul>

<br/>

<ul>
<li style={{padding:"5px",position:"absolute",top:"360px"}} className='more'><b>western - <mark>"Set in the American West that [embody] the spirit, the struggle."</mark></b></li>
</ul>

<br/>

<ul>
<li style={{padding:"5px",position:"absolute",top:"400px"}} className='more'><b>Adventure - <mark>They contain many of the same features of action movies.</mark></b></li>

</ul>
  </ol>
</p>
</div>



<div style={{position:"absolute" ,left:"220px",top:"90px",color:"transparent"}}>
<Link to='/mystry/'>Mystry</Link>
  <Link to='/fantacy/'>Fantacy</Link>
  <Link to='/drama/'>Drama</Link>
  <Link to='/comedy/'>Comedy</Link>
  <Link to='/horror/'>Horror</Link>
  <Link to='/thriller/'>Thriller</Link>
  <Link to='/action/'>Action</Link>
  <Link to='/western/'>Western</Link>
<Link to='/adventure/'>Adventure</Link>
      </div>
</div>
  
  )
}

export default More
