import { useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { base_URL } from "../config/base.url.js";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSignIn = async () => {
    let payload = {
      email,
      password,
    };
    // console.log(payload, "14");
    try {
      let res = await fetch(`${base_URL}user/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let data = await res.json();
      // console.log("data23:", data.msg);
      if (res.ok) {
        localStorage.setItem("token", data.token);  
        localStorage.setItem("userId", data.userId); 
        alert("Login successful!");

        // Redirect to the stored redirect path (if any), or home
        const redirectTo = localStorage.getItem("redirectTo") || "/"
        localStorage.removeItem("redirectTo")
        navigate(redirectTo)
        window.location.reload(); 
        
      } else {
        alert(data.msg || "Login failed");
      }
    } catch (error) {
      // console.log(error, "error");
      alert(error.msg);
    }
  };

  return (
    <div className="signIn_head_container">
      <Link className="goToHome" to={"/"}>
        Go to Home
      </Link>
      <div className="signIn_container">
        <h2>Welcome to Log In!</h2>
        <div className="signIn_content">
          <input
            type="text"
            placeholder="Enter Email.."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="signIn_email"
          />
          <input
            type="password"
            placeholder="Enter Password.."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="signIn_pass"
          />
        </div>
        <button className="signIn_button" onClick={handleSignIn}>
          Log In!
        </button>
        <hr className="signIn_line" />
        <div className="signIn_last_content">
          <p className="signIn_member">
            already member?{" "}
            <Link className="signIn_login" to="/sign_in">
              Register ! now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
