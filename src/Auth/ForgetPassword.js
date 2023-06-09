import React from "react";
// import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
//   const navigate = useNavigate();
  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
  //     navigate("/");
  //   }
  // },);

  // const haldlelogin = async () => {
  //   console.log("email, password", email, password);
  //   let result = await fetch("http://localhost:5000/login", {
  //     method: "Post",
  //     body: JSON.stringify({ email, password }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   result = await result.json();
  //   console.log(result);
  //   if (result.auth) {
  //     localStorage.setItem("user", JSON.stringify(result.user));
  //     localStorage.setItem("token", JSON.stringify(result.auth));
  //     navigate("/");
  //   } else {
  //     alert("please enter correct details");
  //   }
  // };
  return (
    <div className="log">
        <h1 style={{marginTop:"2rem"}}>WELCOME TO ADMIN-PANEL</h1>
      <div className="log1">
        <div className="log1_left">
          <img src="/Images/info-image.png" alt="wel" />
          <h1 style={{fontSize:"35px"}}>Messaging solutions to scale your business</h1>
          <p>
            SMS Solution with end-to-end encryption. DLT Friendly. Realtime
            analytics. Multiple API compatibility. Intelligent operator routing.
            Auto-scaling system.
          </p>
        </div>
        <div className="log1_right">
          <h1 style={{marginLeft:"15px"}}>Forget Password</h1>
          <div>
            <div className="loginform">
              <div className="log1_right1">
                <label htmlFor="name">Email</label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Email"
                  
                />
              </div>
              
              
              <div className="handler">
                <input type="submit" value="OTP" />
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

export default ForgetPassword;
