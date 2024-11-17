import React from 'react'
import { useState } from 'react'
import {useContext} from "react"
import { ItemContext } from '../context/ItemContext';
import axios from "axios"

const Login = () => {

    const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup


    const toggleForm = () => setIsLogin(!isLogin);

    // const [currentState, setCurrentState] = useState("Sign Up")
    const {token, setToken, nevigate, backendUrl}=useContext(ItemContext);

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("");



    const onSubmitHandler= async(event) => {
      event.preventDefault();

      try {
        
        if(!isLogin)
        {
          const response=await axios.post(backendUrl + "/api/user/register", {name, email, password})
          console.log(response.data);

          if(response.data.success)
          {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
          }
          else
          {
            toast.error(response.data.message);
          }
        }
        else
        {
          const response=await axios.post(backendUrl + "/api/user/login", {email, password})
          console.log(response.data)
        }
      } catch (error) {
        
      }
    }
    
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
  
          {/* Form */}
          <form onSubmit={onSubmitHandler}>
            {/* Name input for Signup only */}
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input onChange={(e)=>setName(e.target.value)} value={name}
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
  
            {/* Email input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input onChange={(e)=>setEmail(e.target.value)} value={email}
                type="email"
                id="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            {/* Password input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
                Password
              </label>
              <input onChange={(e)=>setPassword(e.target.value)} value={password}
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition duration-200"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
  
          {/* Toggle Button */}
          <p className="text-center text-gray-600 mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleForm}
              className="text-blue-500 font-medium hover:underline focus:outline-none"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    );
}

export default Login
