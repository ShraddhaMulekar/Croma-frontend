import { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { base_URL } from "../config/base.url.js";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    let payload = {
      name,
      email,
      password,
    };
    console.log(payload, "14");
    try {
      let res = await fetch(`${base_URL}/user/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let data = await res.json();
        console.log("data23:", data.msg);
      alert(data.msg);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error, "error");
      alert(error.msg);
    }
  };

  return (
    <div className="signIn_head_container">
      <Link className="goToHome" to={"/"}>
        Go to Home
      </Link>
      <div className="signIn_container">
        <h2>Welcome to Sign In!</h2>
        <div className="signIn_content">
          <input
            type="text"
            placeholder="Enter Name.."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="signIn_name"
          />
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
          Register!
        </button>
        <hr className="signIn_line" />
        <div className="signIn_last_content">
          <p className="signIn_member">
            already member?{" "}
            <Link className="signIn_login" to="/log_in">
              Log in! now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
