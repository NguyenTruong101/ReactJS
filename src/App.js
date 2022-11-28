import './CSS/login.css';
import './App.css';
// import {Switch, Router} from 'react-router-dom'
import axios from "axios";


import React, { useState, useEffect } from 'react';
import Login from './Component/Login.js';
import Homepage from './Component/homepage.js';
import New from './Component/New';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";



function App() {


  

  return (
    
   

    <div>
       {/* {<Homepage/>} */}
      


       <Router>
      <div>
        {/* <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/homepage">Home Page</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashbo</Link>
          </li>
        </ul>

        <hr /> */}

        
          <Routes>
            <Route exact path="/" element={<Login/>}>
            </Route>
            <Route exact path="/homepage" element={<Homepage/>}>
            </Route>
            <Route exact path='/new' element={<New/>}>

            </Route>
          </Routes>
          
          
        
      </div>
    </Router>
    </div>

    
     
      



  )



}

export default App;
