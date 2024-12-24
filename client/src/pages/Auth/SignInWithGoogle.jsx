import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import React from "react";
import axios from "axios";
import { auth } from "../../components/Firebase";
import { useNavigate } from "react-router-dom";
import Google from "../../ui/Google";

export const SignInWithGoogle = () => {
  const navigate = useNavigate();

  const googleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithRedirect(auth, provider);
      const user = result.user;

      const userData = {
        email: user.email,
        password: user.uid, // Using UID as password for simplicity
      };

      try {
        // Try logging in first
        const loginResponse = await axios.post(
          "http://localhost:1111/user/login",
          userData
        );

        if (loginResponse.data.success) {
          console.log("Login successful:", loginResponse.data);

          // Store token and navigate to dashboard
          localStorage.setItem("token", loginResponse.data.token);
          navigate("/dashboard");
        }
      } catch (loginError) {
        console.warn("User not found, trying to sign up...");

        // If login fails, sign up the user
        const signUpData = {
          username: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber || "",
          isVerified: user.emailVerified,
          password: user.uid,
        };

        const signUpResponse = await axios.post(
          "http://localhost:1111/user/add",
          signUpData
        );

        console.log("Sign up successful:", signUpResponse.data);

        // After sign up, log in the user
        const loginResponse = await axios.post(
          "http://localhost:1111/user/login",
          userData
        );

        localStorage.setItem("token", loginResponse.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error during Google login", error.message);
    }
  };

  return (
    <div>
      <div className="text-center">
        <div className="flex items-center justify-center space-x-4 my-4">
          <div className="border-t border-gray-300 w-1/4"></div>
          <span className="text-gray-500 text-sm">or sign up/sign in with</span>
          <div className="border-t border-gray-300 w-1/4"></div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5">
        <button onClick={googleLogin}>
          <Google />
        </button>
      </div>
    </div>
  );
};
