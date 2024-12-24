import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loader from "../../ui/Loader";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [query] = useSearchParams();
  const token = query.get("token");
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { password };
      setLoading(true);
      let result = await axios({
        url: "http://localhost:1111/user/reset-password",
        method: "POST",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/login");
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
              <p>Enter a new password</p>
            </span>
          </span>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            className="form-input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit" className="form-button">
            {isLoading ? <Loader /> : "Reset"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default ResetPassword;
