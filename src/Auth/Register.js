import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import './register.css'

const Register = () => {
    const [username,setUserName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate();

    // useEffect(()=>{
    //     const auth = localStorage.getItem('user');
    //     if(auth)
    //     {
    //         navigate('/login')
    //     }
    // })

    const collectData=async ()=>{
        console.log(username,email,password);
        let result = await fetch('http://localhost:5000/register',{
            method: 'post',
            body: JSON.stringify({username,email,password}),
            headers:{
                'Content-Type': 'application/json'
            },
        });

        result = await result.json()
        if(result){
          alert("user login successfully");
          navigate("/");
        }
      
      
    }

  return (
    <div className="log">
      <div className="log1">
        <div className="log1_left">
          <img src="/Images/pic-2.png" alt="wel" />
          <h1>Maximize Your Visibility</h1>
          <p>
          Ensuring the best return on investment through SMS messages marketing or advertising.
          </p>
        </div>
        <div className="log1_right">
          <h1>Register</h1>
          <div>
            <div className="registerform">
              <div className="log1_right1">
                <label htmlFor="username">Username</label>
                <br />
                <input type="text" name="username" value={username} placeholder="Your Name" onChange={ (e)=>setUserName(e.target.value) } />
              </div>

              <div className="log1_right1">
                <label htmlFor="name">Email</label>
                <br />
                <input type="text" name="email" value={email} placeholder="Your Email" onChange={ (e)=>setEmail(e.target.value) } />
              </div>
              <div className="log1_right1">
                <label htmlFor="passw">Password</label>
                <br />
                <input type="password" name="password" value={password} placeholder="Your Password" onChange={ (e)=>setPassword(e.target.value) } />
              </div>
              <div className="handler1">
                 <input type="submit"  onClick={collectData}  value="Register" />
              </div>
              <div className="handler2">
                 <input type='button' onClick={() => navigate("/login")} value="Login" />
                 </div>
            </div>
          </div>
        </div>
      </div>
      <p className="hadlr1">
        © 2023-2024 Powered by OTPL
      </p>
    </div>
  )
}

export default Register;