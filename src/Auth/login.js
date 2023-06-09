import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     navigate("/");
  //   }
  // },);

  const haldlelogin = async () => {
    console.log( email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "Post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if(result){
      alert("user login successfully");
      console.log(result);
      navigate("/sidebar");
     }else{
      alert("Record not found");
     }
    
   
  };
  return (
    <div className="log">
      <div className="log1">
        <div className="log1_left">
          <img src="/Images/pic-2.png" alt="wel" />
          <h1 style={{fontSize:"35px"}}>Maximize Your Visibility</h1>
          <p>
          Ensuring the best return on investment through SMS messages marketing or advertising.
          </p>
        </div>
        <div className="log1_right">
          <h1>Login</h1>
          <div>
            <div className="loginform">
              <div className="log1_right1">
                <label htmlFor="name">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  
                />
              </div>
              <div className="log1_right1">
                <label htmlFor="passw">Password</label>
                <br />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  
                /><NavLink to='/forgetpassword'>
                <p>Forgot Password ?</p>
                </NavLink>
              </div>
              <h6>
                <span>
                  <input type="checkbox" />
                </span>{" "}
                I accept the Terms and Conditions{" "}
              </h6>
              {/* <div className="handler">
                <NavLink to='/sidebar'>
                <input type="submit" value="Login" />
                </NavLink>
              </div> */}
            <button className="btn btn-primary" onClick={haldlelogin}>Login</button>
              <div className="handler2">
                 <input type='button' onClick={() => navigate("/register")} value="Register" />
                 </div>
            </div>
          </div>
        </div>
      </div>
      <p className="hadlr1">
        © 2023-2024 Powered by OTPL
      </p>
    </div>
  );
};

export default Login;
