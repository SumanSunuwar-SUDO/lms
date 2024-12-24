import axios from "axios";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loader from "../../ui/Loader";
import { SignInWithGoogle } from "./SignInWithGoogle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    setLoading(true);
    try {
      let result = await axios({
        url: `http://localhost:1111/user/login`,
        method: "POST",
        data: data,
      });

      setEmail("");
      setPassword("");
      setLoading(false);
      navigate("/profile");
    } catch (error) {
      setEmail("");
      setPassword("");
      setLoading(false);
    }
  };

  return (
    <main className="login-main ">
      <section className="login-section">
        <div className="login-div">
          <span className="px-4">
            <h1 className="text-xl font-semibold">LOGIN</h1>
            <span className="text-[14px] font-normal text-gray-500 flex justify-between">
              <p>SIGN IN YOUR ACCOUNT</p>
              <Link className="text-blue-500" to={"/signup"}>
                Sign Up
              </Link>
            </span>
          </span>
        </div>
        <form className="form" onSubmit={handleSubmit}>
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
          <button type="submit" className="form-button">
            {isLoading ? <Loader /> : "Login"}
          </button>
          <NavLink
            to={"/forgot-password"}
            className={"self-center text-slate-400"}
          >
            Forgot Password?
          </NavLink>
        </form>
        <SignInWithGoogle></SignInWithGoogle>
      </section>
    </main>
  );
};

export default Login;
