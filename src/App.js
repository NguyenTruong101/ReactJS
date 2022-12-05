import './CSS/login.css';
import './App.css';
// import {Switch, Router} from 'react-router-dom'
import axios from "axios";


import React, { useState, useEffect } from 'react';
import Login from './Component/Login.js';
import Homepage from './Component/homepage.js';
import New from './Component/New.js';
import NganhNghe from './Component/DanhMuc/NganhNghe.js';
import Khoa from './Component/DanhMuc/Khoa';
import Lop from './Component/DanhMuc/Lop';
import ThanhVien from './Component/ThanhVien/ThanhVien';




import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import SideBar from './Component/Sidebar';
import Navbar from './Component/Navbar';





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
          <div style={{ width: '100%', display: 'flex' }}>
            {/* <SideBar/>
          <div */}
            <SideBar />
            <div style={{ width: '80%' }}>
              <Navbar />


              <Routes>
                <Route exact path="/login" element={<Login />}>
                </Route>
                <Route exact path="/thanh-vien" element={<ThanhVien />}>
                </Route>
                <Route exact path='/new' element={<New />}>
                </Route>
                <Route exact path="/danh-muc/nganh-nghe" element={<NganhNghe/>}>
                </Route>
                <Route exact path="/danh-muc/khoa" element={<Khoa />}>
                </Route>
                <Route exact path="/danh-muc/lop" element={<Lop />}>
                </Route>
              </Routes>

            </div>

          </div>
        </div>
      </Router>
    </div>







  )



}

export default App;
