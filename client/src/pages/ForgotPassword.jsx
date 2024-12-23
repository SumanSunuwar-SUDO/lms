import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../ui/Loader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email };
    setLoading(true);
    try {
      let result = await axios({
        url: "http://localhost:1111/user/forgot-password",
        method: "POST",
        data: data,
      });
      setEmail("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <main className="login-main ">
      <section className="login-section">
        <div className="login-div">
          <span className="px-4">
            <h1 className="text-xl font-semibold">Forgot your password?</h1>
            <span className="text-[14px] font-normal text-gray-500 flex justify-between">
              <p>Please enter the email you use to sign in</p>
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

          <button type="submit" className="form-button">
            {isLoading ? <Loader /> : "Reset Password"}
          </button>
          <NavLink to={"/signup"} className={"self-center text-slate-400"}>
            Back to Sign in
          </NavLink>
        </form>
      </section>
    </main>
  );
};

export default ForgotPassword;
