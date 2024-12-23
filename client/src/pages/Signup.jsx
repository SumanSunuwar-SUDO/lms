import axios from "axios";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Loader from "../ui/Loader";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { username, email, password, phoneNumber };
      setLoading(true);
      let result = await axios({
        url: "http://localhost:1111/user/add",
        method: "POST",
        data: data,
      });
      setUsername("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setLoading(false);
    } catch (error) {
      setUsername("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setLoading(false);
    }
  };

  return (
    <main className="login-main ">
      <section className="login-section">
        <div className="login-div">
          <span className="px-4">
            <h1 className="text-xl font-semibold">SIGN UP</h1>
            <span className="text-[14px] font-normal text-gray-500 flex justify-between">
              <p>Already a member?</p>
              <Link className="text-blue-500" to={"/login"}>
                Log In
              </Link>
            </span>
          </span>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Your e-mail"
            className="form-input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Phone number"
            className="form-input"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <button type="submit" className="form-button">
            {isLoading ? <Loader /> : "Signup"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Signup;
