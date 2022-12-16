import React, {useState} from "react"; 
import axios from "axios";
import IMG1 from '../assets/1.png';
import IMG2 from '../assets/2.png';
import '../CSS/login.css';
import { Navigate } from "react-router-dom";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
  } from "react-router-dom";




const Login = ()  => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const token =localStorage.getItem ("token");
    
    const handleSubmit = () => {
       
        axios.post('https://training.bks.center/api/auth/login',{},{
            params: {
                username : user,
                password : pass,
            }
        }).then(res=>{
            // console.log(res);
            console.log(res);
            localStorage.setItem("token",res.data.token);
           
        })
    }
    return (
    

        <div>

   
    
          {/* <div>
           
                <div>Token la: {token}</div>
          </div> */}
          <div className='header'>
            <p className='text-header'>Đăng Nhập</p>
            
              
          </div>
          <div className='user'>
            <p className='textuser'>User</p>
            <input type={"user"} className='inputuser' onChange={(e)=>{
                console.log(e.target.value);
                setUser(e.target.value)}
                }></input>
          </div>
          <div className='password'>
            <p className='textpass'>Password</p>
            <input type={"password"} className='inputpass' onChange={(e)=>{
                console.log(e.target.value);
                setPass(e.target.value)}}></input>
          </div>
    
    
          <button type='submit' className='login'  onClick={()=>handleSubmit()}>Log In</button>
    
    
          <img className='img1' src={IMG1}></img>

          <img className='img2' src={IMG2}></img>
    
          
          
    
        </div>
    );

}
export default Login;
































// import axios from "axios";
// import React, { useState } from "react";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
 
//   const token = localStorage.getItem("token")
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if(!username || username === ""){
//       alert('Tên đăng nhập không được để trống')
//       return;
//     }
//     if(!password || password === ""){
//       alert('Mật khẩu không được để trống')
//       return;
//     }
//    axios.post(`https://training.bks.center/api/auth/login`,{},{
//     params: {
//         username: username,
//         password: password
//     }
//    }).then(response=>{
//     console.log(response)
//     localStorage.setItem("token",response.data.token);
//    })
//   };
//   return (
//     <div className="relative w-full min-h-screen z-1">
//       {/* ========================= Start image ==========================*/}
//       {/* ========================== End Image ============================ */}
//       {/* ========================== Login form =========================== */}
//       <div className="py-6 px-10 z-10 relative">
//         {/* Title */}
//         <div>
//           <h3 className="font-medium text-xl">Quản lý đồ án</h3>
//           <div>Token laf: {token}</div>
//         </div>
//         {/* Login Region */}
//         <div className="lg:w-1/2 mt-20">
//           <div className="lg:w-1/2 mx-auto">
//             <h1 className="text-[32px] text-[#1890FF] font-bold mb-12 text-center">Đăng nhập</h1>
//             <form onSubmit={handleSubmit}>
//               <div className="flex flex-col">
//                 <label htmlFor="username">Tài khoản</label>
//                 <input
//                   id="username"
//                   className="mt-[10px] border border-[#D9D9D9] rounded-lg px-6 py-3"
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col mt-6">
//                 <label htmlFor="password">Mật khẩu</label>
//                 <input
//                   type={"password"}
//                   id="password"
//                   className="border border-[#D9D9D9] rounded-lg px-6 py-3"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 onClick={()=>handleSubmit()}
//                 className="mt-10 px-6 py-3 text-white bg-[#1890FF] w-full rounded-lg "
//               >
//                 Đăng nhập
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       {/* ========================== End form ============================== */}
//     </div>
//   );
// };

// export default Login;

