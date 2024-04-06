import React, { useState } from "react";
import { appleLogo, facebook, google, tailwindEffect } from "../data/constants";
import { Button, Input } from "./index";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-5">
      <div className="bg-customBg rounded-lg shadow-md p-8 w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>
        {/* form */}
        <form onSubmit={handleSubmit}>
          {/* inputs */}{" "}
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
          {/* submit button */}
          <button
            type="submit"
            className={`${tailwindEffect} bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-full`}
          >
            LOG IN
          </button>
        </form>
        {/* demarcation */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex-1 border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-400">Or</span>
          <div className="flex-1 border-t border-gray-400"></div>
        </div>
        {/* alternative login */}
        <div className="mt-4 space-y-4 w-full">
          <Button alt="Google" label="Login with Google" icon={google} />
          <Button alt="Facebook" label="Login with Facebook" icon={facebook} />
          <Button alt="Apple" label="Login with Apple" icon={appleLogo} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
