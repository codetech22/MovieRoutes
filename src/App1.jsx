import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Movie from './movieroute/Movie'
import Tvshows from './movieroute/Tvshows'
import People from './movieroute/People'
import More from './movieroute/More'

import Add from './movieroute/Add'
import Alarm from './movieroute/Alarm'
import Box from './movieroute/Box'
import Circle from './movieroute/Circle'
import Sear from './movieroute/Sear'



import Mystry from './movieroute/Mystry'
import Fantacy from './movieroute/Fantacy'
import Drama from './movieroute/Drama'
import Comedy from './movieroute/Comedy'
import Thriller from './movieroute/Thriller'
import Horror from './movieroute/Horror'
import Action from './movieroute/Action'
import Western from './movieroute/Western'
import Adventure from './movieroute/Adventure'




import Mystryo from './movieroute/Mystryo'
import Actiono from './movieroute/Actiono'
import Westerno from './movieroute/Westerno'
import Adventureo from './movieroute/Adventureo'
import Fantacyo from './movieroute/Fantacyo'
import Dramao from './movieroute/Dramao'
import Comedyo from './movieroute/Comedyo'
import Thrillero from './movieroute/Thrillero'
import Horroro from './movieroute/Horroro'


import Subscrption from './movieroute/Subscrption'


import Created from './movieroute/Created'


import Plan from './movieroute/Plan'


// import './movie.css'

const App1 = () => {
  return (  

    <div style={{height:"1000px",border:"1px solid black",backgroundColor:"darkgray"}}>
   
      
<div style={{height:"70px",width:"1365px",border:"1px solid black"}}>
  
  
<BrowserRouter>

<Routes>

    

  <Route path='/Movie' element={<Movie/>}>movie</Route>
  <Route path='/tvshows' element={<Tvshows/>}>Tv shows</Route>
  <Route path='/people' element={<People/>}>People</Route>
  <Route path='/more' element={<More/>}>More</Route>

{/* <h1 style={{height:"10px",width:"100px",border:"1px solid black"}}></h1> */}
  <Route path='/add' element={<Add/>}>Add</Route>
<Route path='/box' element={<Box/>}>Box</Route>
<Route path='/alarm' element={<Alarm/>}>Bell</Route>
<Route path='/circle' element={<Circle/>}>Circle</Route>
<Route path='/sear' element={<Sear/>}>Search</Route>

 <Route path='/mystry/' element={<Mystry/>}>Mystry</Route>
 <Route path='/fantacy/' element={<Fantacy/>}>Fantacy</Route>
 <Route path='/drama/' element={<Drama/>}>Drama</Route>
 <Route path='/comedy/' element={<Comedy/>}>Comedy</Route>
 <Route path='/horror/' element={<Horror/>}>Horror</Route>
 <Route path='/thriller/' element={<Thriller/>}>Thriller</Route>
 <Route path='/action/' element={<Action/>}>Action</Route>
 <Route path='/western/' element={<Western/>}>Western</Route>
<Route path='/adventure/' element={<Adventure/>}>Adventure</Route>




<Route path='/mystryo' element={<Mystryo/>}>Mystryo</Route>
<Route path='/actiono' element={<Actiono/>}>Actiono</Route>
<Route path='/westerno' element={<Westerno/>}>Westerno</Route>
<Route path='/adventureo' element={<Adventureo/>}>Adventureo</Route>
<Route path='/comedyo' element={<Comedyo/>}>Comedyo</Route>
<Route path='/fantacyo' element={<Fantacyo/>}>Fantacyo</Route>
<Route path='/dramao' element={<Dramao/>}>Dramao</Route>
<Route path='/thrillero' element={<Thrillero/>}>Thrillero</Route>
<Route path='/horroro' element={<Horroro/>}>Horroro</Route>


<Route path='/subscription' element={<Subscrption/>}>Subscription</Route>


<Route path='/created' element={<Created/>}>Created</Route>


<Route path='/plan' element={<Plan/>}>Plan</Route>

</Routes>

</BrowserRouter>


<div>
  <li style={{display:"flex",flexDirection:"row"}}>
  <button><b><h1 style={{padding:"20px",fontFamily:"revert",fontSize:"25px",color:"brown"}}>TMDB</h1></b></button>
  <button><h1 style={{height:"22px",width:"65px",border:"1px solid black",backgroundColor:"brown",borderRadius:"10px"}}></h1></button>

</li>
</div>




</div>
    </div>

    
    

  )
}

export default App1







