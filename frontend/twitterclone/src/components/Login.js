// import React, { useState } from 'react'
// import axios from "axios";
// import { USER_API_END_POINT } from "../utils/constant.js";
// import toast from "react-hot-toast";
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { getUser } from '../redux/userSlice.js';

// const Login = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();


//   const submitHandler = async (e) => {
//     e.preventDefault();
//     //  console.log(name,email,username,password);
//     if (isLogin) {
//       try {
//         const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password }, {
//           headers: {
//             'Content-Type': "application/json"
//           },
//           withCredentials: true
//         });
//         dispatch(getUser(res?.data?.user))
//         if (res.data.success) {

//           navigate("/")
//           toast.success(res.data.message);
//         }
//       } catch (error) {
//         toast.success(error.response.data.message);
//         console.log(error);
//       }
//     } else {
//       try {
//         const res = await axios.post(`${USER_API_END_POINT}/register`, { name, email, username, password }, {
//           headers: {
//             'Content-Type': "application/json"
//           },
//           withCredentials: true
//         });

//         if (res.data.success) {
//           setIsLogin(true);
//           toast.success(res.data.message);
//         }
//       } catch (error) {
//         toast.success(error.response.data.message);

//         console.log(error);
//       }
//     }

//   }


//   const loginSignUpHandler = () => {
//     setIsLogin(!isLogin)
//   }
import React, { useState } from 'react';
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { getUser } from '../redux/userSlice';
import img1 from "../img/login.jpg"

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // login
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, { email, password }, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        }); 
        dispatch(getUser(res?.data?.user));
        if(res.data.success){
          navigate("/");
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    } else {
      // signup
      try {
        const res = await axios.post(`${USER_API_END_POINT}/register`, { name, username, email, password }, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        }); 
        if(res.data.success){
          setIsLogin(true);
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    }
  }


  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  }
  return (<>
  
    <div className='relative w-full h-full min-h-screen text-black  flex items-center justify-center'>
  <img src={img1} alt="" className='absolute inset-0 w-full h-full object-cover object-center' />
  
  <div className='w-full max-w-lg flex flex-col items-center justify-center p-6 bg-transparent border-2 rounded-lg shadow-md backdrop-blur-xl'>
    <h1 className='text-4xl md:text-6xl font-bold mb-5'>BirdBox</h1>
    
    <div className='flex flex-col items-center w-full md:w-3/5'>
      <h1 className='text-xl md:text-2xl font-bold mb-2'>{isLogin ? "Login" : "Signup"}</h1>
      <form onSubmit={submitHandler} className='flex text-black flex-col w-full bg-transparent'>
        {!isLogin && (
          <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className="input-style bg-transparent" />
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className="input-style  bg-transparent" />
          </>
        )}
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className="input-style bg-transparent" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className="input-style bg-transparent" />
        <button className='btn-style bg-blue-[#093D4D]'>{isLogin ? "Login" : "Signup"}</button>
        <p className='mt-2'>{isLogin ? "Create a new Account?" : "Already have an account?"} <span onClick={loginSignupHandler} className='font-bold text-blue-600 cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
      </form>
    </div>
  </div>
</div>



  </>
  )
}


export default Login;