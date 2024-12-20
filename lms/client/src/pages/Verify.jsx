import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Verify = () => {
  const [query] = useSearchParams();
  const token = query.get("token");
  const navigate = useNavigate();

  const verifyToken = async (e) => {
    try {
      let result = await axios({
        url: "http://localhost:1111/user/verify-email",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result);
      navigate("/login");
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  return <div>Verify</div>;
};

export default Verify;
