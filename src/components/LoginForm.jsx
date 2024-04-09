import React, { useContext, useEffect, useState } from "react";
import { appleLogo, facebook, google, tailwindEffect } from "../data/constants";
import { Button, Input, LittleLoader } from "./index";
import { Link } from "react-router-dom";
import { FirebaseAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const { loginWithEmailAndPassword, loading, error, setError } =
    useContext(FirebaseAuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    try {
      await loginWithEmailAndPassword(email, password);
      navigate(`/`);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    toast.success("Welcome 😊. Only form registeration works");
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-3">
      <div className="sm:bg-customBg rounded-lg sm:shadow-md sm:p-8 w-full sm:max-w-xs">
        <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>

        {/* form */}
        <form onSubmit={handleSubmit}>
          {/* inputs */}
          <div className="space-y-3 mb-5">
            <Input
              type="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </div>

          {/* submit button */}
          <button
            type="submit"
            className={`${tailwindEffect} ${
              isLoading ? "bg-gray-300" : "bg-customBlue hover:bg-blue-700"
            } flex justify-center items-center text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full`}
            disabled={isLoading}
          >
            {isLoading ? <LittleLoader /> : "LOG IN"}
          </button>

          {/* error message */}
          {error && (
            <div className="text-red-500 text-sm text-center mt-2">{error}</div>
          )}
        </form>

        {/* demarcation */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex-1 border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Or</span>
          <div className="flex-1 border-t border-gray-400"></div>
        </div>

        {/* alternative login */}
        <div className="mt-4 space-y-2 w-full">
          <Button alt="Google" label="Login with Google" icon={google} />
          <Button alt="Facebook" label="Login with Facebook" icon={facebook} />
          <Button alt="Apple" label="Login with Apple" icon={appleLogo} />
        </div>

        {/* links */}
        <div className="w-full text-center mt-5 space-y-3 text-sm">
          <Link
            to="#"
            className={`${tailwindEffect} underline underline-offset-4 hover:text-blue-700`}
          >
            Forgot password?
          </Link>
          <br />
          <p className="whitespace-nowrap">
            Don't have an account?{" "}
            <Link
              to="/register"
              className={`${tailwindEffect} font-semibold underline underline-offset-4 text-customBlue hover:text-blue-700`}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
